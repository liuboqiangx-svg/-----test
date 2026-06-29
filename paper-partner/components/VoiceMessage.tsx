"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Loader2, Volume2 } from "lucide-react";

interface VoiceMessageProps {
  /** 语音URL */
  audioUrl?: string;
  /** 文本内容（用于生成语音） */
  text: string;
  /** 角色ID（用于选择音色） */
  characterId?: string;
  /** 时长（秒） */
  duration?: number;
  /** 是否正在生成 */
  isGenerating?: boolean;
  /** 是否正在播放 */
  isPlaying?: boolean;
  /** 播放进度 (0-100) */
  progress?: number;
  /** 点击播放/暂停回调 */
  onPlay?: () => void;
  /** 点击停止回调 */
  onStop?: () => void;
  /** 自定义类名 */
  className?: string;
}

/**
 * 语音消息组件
 * 暮光治愈系风格
 */
export function VoiceMessage({
  audioUrl,
  text,
  characterId,
  duration,
  isGenerating = false,
  isPlaying = false,
  progress = 0,
  onPlay,
  onStop,
  className = "",
}: VoiceMessageProps) {
  const [waveAnimating, setWaveAnimating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentProgress, setCurrentProgress] = useState(progress);
  const [currentDuration, setCurrentDuration] = useState(duration || 0);

  // 格式化时长
  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // 处理播放/暂停
  const handleToggle = () => {
    if (isPlaying) {
      onStop?.();
    } else {
      onPlay?.();
    }
  };

  // 显示的时长
  const displayDuration = currentDuration > 0 ? currentDuration : duration || 0;

  return (
    <div className={`twilight-voice-bubble ${className}`}>
      {/* 播放按钮 */}
      <button
        onClick={handleToggle}
        disabled={isGenerating}
        className="twilight-play-btn"
        title={isPlaying ? "暂停" : "播放"}
      >
        {isGenerating ? (
          <Loader2 className="w-4 h-4 twilight-spin" />
        ) : isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 ml-0.5" />
        )}
      </button>

      {/* 波形动画 + 进度条 */}
      <div className="twilight-voice-progress">
        {/* 波形动画（播放时显示） */}
        {isPlaying && (
          <div className="flex items-center gap-1 h-6 mb-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="twilight-wave-bar"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  height: `${8 + Math.random() * 8}px`,
                }}
              />
            ))}
          </div>
        )}

        {/* 进度条 */}
        <div className="twilight-progress-bar">
          <div
            className="twilight-progress-fill"
            style={{ width: `${isPlaying ? currentProgress : progress}%` }}
          />
        </div>

        {/* 时长 */}
        <div className="twilight-voice-time">
          <span>{formatDuration(displayDuration)}</span>
          {isPlaying && currentDuration > 0 && (
            <span className="text-orange-500">{formatDuration((currentProgress / 100) * currentDuration)}</span>
          )}
        </div>
      </div>

      {/* 音量图标 */}
      {!isPlaying && !isGenerating && (
        <Volume2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
      )}
    </div>
  );
}

/**
 * 语音消息气泡（用于聊天中）
 */
interface VoiceBubbleProps {
  /** 消息内容 */
  text: string;
  /** 消息ID */
  messageId: string;
  /** 语音URL */
  audioUrl?: string;
  /** 是否正在播放 */
  isPlaying?: boolean;
  /** 是否正在生成语音 */
  isGenerating?: boolean;
  /** 播放进度 */
  progress?: number;
  /** 时长 */
  duration?: number;
  /** 角色ID */
  characterId?: string;
  /** 发送时间 */
  timestamp?: string;
  /** 播放回调 */
  onPlay?: (messageId: string) => void;
  /** 停止回调 */
  onStop?: () => void;
}

export function VoiceBubble({
  text,
  messageId,
  audioUrl,
  isPlaying = false,
  isGenerating = false,
  progress = 0,
  duration,
  characterId,
  timestamp,
  onPlay,
  onStop,
}: VoiceBubbleProps) {
  const [showText, setShowText] = useState(false);

  const handlePlay = () => {
    onPlay?.(messageId);
  };

  const handleStop = () => {
    onStop?.();
  };

  return (
    <div className="flex flex-col gap-2">
      {/* 语音消息 */}
      <VoiceMessage
        text={text}
        audioUrl={audioUrl}
        characterId={characterId}
        duration={duration}
        isGenerating={isGenerating}
        isPlaying={isPlaying}
        progress={progress}
        onPlay={handlePlay}
        onStop={handleStop}
      />

      {/* 可选：显示对应文字（点击展开） */}
      {!showText && (
        <button
          onClick={() => setShowText(true)}
          className="text-xs text-amber-600 hover:text-orange-500 transition-colors text-left"
        >
          显示文字 ▼
        </button>
      )}

      {showText && (
        <div className="text-sm text-amber-800 twilight-bubble-bot px-3 py-2 rounded-lg">
          {text}
        </div>
      )}
    </div>
  );
}
