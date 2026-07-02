"use strict";
/**
 * DeepSeek Provider 实现
 *
 * 基于 OpenAI SDK 的 DeepSeek API 适配
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepSeekProvider = void 0;
var openai_1 = require("openai");
/**
 * DeepSeek Provider
 */
var DeepSeekProvider = /** @class */ (function () {
    function DeepSeekProvider(config) {
        this.name = "deepseek";
        this.client = new openai_1.default({
            apiKey: config.apiKey,
            baseURL: config.baseURL || "https://api.deepseek.com/v1",
        });
        this.model = config.model || "deepseek-v4-pro";
    }
    DeepSeekProvider.prototype.getName = function () {
        return this.name;
    };
    DeepSeekProvider.prototype.healthCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.client.chat.completions.create({
                                model: this.model,
                                messages: [{ role: "user", content: "hi" }],
                                max_tokens: 5,
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeepSeekProvider.prototype.chat = function (options) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var reasoningEffort, completion, choice, message, reasoningTokens;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        reasoningEffort = ((_a = options.reasoning) === null || _a === void 0 ? void 0 : _a.effort) || "high";
                        return [4 /*yield*/, this.client.chat.completions.create(__assign({ model: options.model || this.model, messages: options.messages, temperature: options.temperature, max_tokens: options.max_tokens, stream: false }, (((_b = options.reasoning) === null || _b === void 0 ? void 0 : _b.enabled) ? {
                                thinking: {
                                    type: "enabled",
                                },
                                reasoning_effort: reasoningEffort,
                            } : {})))];
                    case 1:
                        completion = _f.sent();
                        choice = completion.choices[0];
                        message = choice === null || choice === void 0 ? void 0 : choice.message;
                        reasoningTokens = (_d = (_c = completion.usage) === null || _c === void 0 ? void 0 : _c.completion_tokens_details) === null || _d === void 0 ? void 0 : _d.reasoning_tokens;
                        return [2 /*return*/, {
                                content: ((_e = message === null || message === void 0 ? void 0 : message.content) === null || _e === void 0 ? void 0 : _e.trim()) || "",
                                reasoning: message === null || message === void 0 ? void 0 : message.reasoning_content,
                                reasoningTokens: reasoningTokens,
                                usage: completion.usage ? {
                                    prompt_tokens: completion.usage.prompt_tokens,
                                    completion_tokens: completion.usage.completion_tokens,
                                    total_tokens: completion.usage.total_tokens,
                                } : undefined,
                                raw: completion,
                            }];
                }
            });
        });
    };
    DeepSeekProvider.prototype.toReasoningResult = function (reasoning) {
        return {
            reasoning: reasoning,
            reasoningDetails: [
                {
                    type: "reasoning.text",
                    text: reasoning,
                    format: "deepseek",
                    index: 0,
                },
            ],
        };
    };
    return DeepSeekProvider;
}());
exports.DeepSeekProvider = DeepSeekProvider;
