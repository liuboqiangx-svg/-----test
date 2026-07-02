"use client";

import { useState } from "react";
import { Play, Loader2 } from "lucide-react";

/**
 * 音色配置
 */
const VOICE_CONFIGS = [
  {
    id: "zh-CN-XiaoxiaoNeural",
    name: "晓晓",
    gender: "女声",
    description: "温柔标准女声",
    character: "晓晓、沈墨、舒婷",
  },
  {
    id: "zh-CN-XiaoyiNeural",
    name: "小艺",
    gender: "女声",
    description: "活泼年轻女声",
    character: "林野",
  },
  {
    id: "zh-CN-YunxiNeural",
    name: "云希",
    gender: "男声",
    description: "阳光活力男声",
    character: "顾燃",
  },
  {
    id: "zh-CN-YunyangNeural",
    name: "云扬",
    gender: "男声",
    description: "新闻播报男声",
    character: "备选",
  },
];

const TEST_TEXTS = [
  "早安呀～今天天气真好，想不想出去走走？",
  "晚安，梦里见哦～爱你💕",
  "今天工作好累啊，好想抱抱你～",
  "在干嘛呢？想你了，快回我消息嘛～",
];

export default function VoiceTestPage() {
  const [selectedVoice, setSelectedVoice] = useState(VOICE_CONFIGS[0].id);
  const [testText, setTestText] = useState(TEST_TEXTS[0]);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const playVoice = async () => {
    if (loading || playing) return;

    setLoading(true);
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: testText,
          speaker: selectedVoice,
          speed: 1.0,
        }),
      });

      const data = await res.json();

      if (data.success && data.data?.url) {
        setLoading(false);
        setPlaying(true);
        const audio = new Audio(data.data.url);
        audio.onended = () => setPlaying(false);
        audio.onerror = () => {
          setPlaying(false);
          alert("播放失败");
        };
        await audio.play();
      } else {
        setLoading(false);
        alert("语音生成失败: " + (data.error?.message || "未知错误"));
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("请求失败");
    }
  };

  return (
    <div className="min-h-screen twilight-gradient-soft py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold twilight-card-name mb-2">
            🎵 音色测试
          </h1>
          <p className="text-amber-700 text-sm">
            测试不同角色的语音音色效果
          </p>
        </div>

        {/* 音色选择 */}
        <div className="twilight-member-card mb-6">
          <h2 className="font-semibold twilight-card-name mb-4">选择音色</h2>
          <div className="grid grid-cols-2 gap-3">
            {VOICE_CONFIGS.map((voice) => (
              <button
                key={voice.id}
                onClick={() => setSelectedVoice(voice.id)}
                className={`p-4 rounded-xl text-left transition-all ${
                  selectedVoice === voice.id
                    ? "bg-orange-100 border-2 border-orange-400"
                    : "bg-amber-50 border-2 border-transparent hover:border-orange-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">
                    {voice.gender === "女声" ? "👩" : "👨"}
                  </span>
                  <span className="font-semibold text-amber-800">
                    {voice.name}
                  </span>
                  <span className="text-xs text-amber-600">({voice.gender})</span>
                </div>
                <p className="text-xs text-amber-600 mb-1">{voice.description}</p>
                <p className="text-xs text-orange-500">适用: {voice.character}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 测试文本 */}
        <div className="twilight-member-card mb-6">
          <h2 className="font-semibold twilight-card-name mb-4">选择测试文本</h2>
          <div className="space-y-2">
            {TEST_TEXTS.map((text, i) => (
              <button
                key={i}
                onClick={() => setTestText(text)}
                className={`w-full p-3 rounded-lg text-left text-sm transition-all ${
                  testText === text
                    ? "bg-orange-100 text-amber-800"
                    : "bg-amber-50 text-amber-700 hover:bg-orange-50"
                }`}
              >
                {text}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <label className="twilight-form-label">自定义文本</label>
            <textarea
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              className="twilight-form-input resize-none"
              rows={2}
              placeholder="输入你想测试的文字..."
            />
          </div>
        </div>

        {/* 播放按钮 */}
        <div className="text-center">
          <button
            onClick={playVoice}
            disabled={loading || playing || !testText.trim()}
            className="twilight-form-btn flex items-center justify-center gap-2 mx-auto max-w-xs disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 twilight-spin" />
                生成中...
              </>
            ) : playing ? (
              <>
                <Play className="w-5 h-5" />
                播放中...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                播放语音
              </>
            )}
          </button>
        </div>

        {/* 返回链接 */}
        <div className="text-center mt-8">
          <a href="/" className="text-amber-600 hover:text-orange-500 text-sm">
            ← 返回聊天
          </a>
        </div>
      </div>
    </div>
  );
}
