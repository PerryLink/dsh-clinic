// 由 scripts/refresh-host-surface.mjs 生成 —— 请勿手改。
// 基线: dsh 0.2.2-alpha.3 / dsh-base 0.2.2-alpha.3（生成于 2026-11-03）
// 再生成: node scripts/refresh-host-surface.mjs --dsh <dsh 安装目录>
// 新鲜度门禁: node scripts/refresh-host-surface.mjs --check
//
// 数据来源（全部离线可读，不需要 harness checkout、不需要联网）：
//   dsh-tool-cordis/lib/types/api-catalog.js  —— 官方生成物，头注释自述与 docs/cordis-catalog
//                                                 "cannot diverge"
//   dsh-base/cordis.patch.yml                 —— 宿主自带行 id
//   dsh/package.json                          —— 会被 preflight 判决的 peer 名

export default {
  "generatedBy": "scripts/refresh-host-surface.mjs",
  "generatedAt": "2026-11-03",
  "baseline": {
    "dshInstall": "/mnt/d/Projects/dsh/audit-2026-11-03/ref/dsh-full",
    "dshVersion": "0.2.2-alpha.3",
    "dshBaseVersion": "0.2.2-alpha.3",
    "appBootVersion": "0.2.2-alpha.3"
  },
  "counts": {
    "catalogServices": 107,
    "runtimeServices": 141,
    "inheritedCtx": 30,
    "events": 88,
    "harnessWaterfall": 19,
    "frameworkWaterfall": 1,
    "builtinRows": 97,
    "evaluatedPeers": 144
  },
  "services": [
    "actionCards",
    "agentDefaultModel",
    "agentLoop",
    "agentPresets",
    "agentTeams",
    "agents",
    "approval",
    "attachments",
    "authorization",
    "browserUse",
    "claudeCodeMods",
    "clientModules",
    "commands",
    "compaction",
    "computerUse",
    "configEditor",
    "connection",
    "cotTranslation",
    "credentials",
    "credentialsController",
    "cuaAccess",
    "deepseekAccount",
    "deepseekLlmApiExtensions",
    "directoryPicker",
    "directoryPickerController",
    "fileReferences",
    "fileUploads",
    "forge",
    "forgePanel",
    "forgeSession",
    "fs",
    "goals",
    "headlessStartup",
    "hmr",
    "inspector",
    "jobController",
    "jobs",
    "liveshareShares",
    "llm",
    "lsp",
    "mcpResources",
    "messageFeedback",
    "officeToPdf",
    "otel",
    "permissionPresets",
    "planMode",
    "pluginManager",
    "pluginMarket",
    "pluginRecommendations",
    "pluginRegistryProbe",
    "productAnalytics",
    "productTelemetry",
    "profileContext",
    "ptcRuntime",
    "remoteAccess",
    "sandbox",
    "sandboxPolicy",
    "schedule",
    "sessionController",
    "sessionFeedback",
    "sessionFileReferences",
    "sessionLogDeepSeek",
    "sessionPersistence",
    "sessionProjectionCache",
    "sessionProjections",
    "sessionQuery",
    "sessionReferenceResolver",
    "sessionSkillCatalog",
    "sessionTelemetry",
    "sessionTitle",
    "sessions",
    "settings",
    "settingsController",
    "shell",
    "shellEnv",
    "skills",
    "speechController",
    "speechToText",
    "spillStore",
    "ssh",
    "storage",
    "storageDomain",
    "subagentModelSelection",
    "subagents",
    "subprocess",
    "systemPrompt",
    "terminalController",
    "terminals",
    "timer",
    "tokenMeter",
    "toolResultPruner",
    "tools",
    "translator",
    "typert",
    "typertGateway",
    "userQuestions",
    "web",
    "webApp",
    "webServer",
    "webhookRuntime",
    "workflowEngine",
    "workingDirectory",
    "workspaceChanges",
    "workspaceController",
    "workspaceFiles",
    "workspaceRegistry",
    "worktrees"
  ],
  "runtimeServices": [
    "accountController",
    "actionCards",
    "agentLoop",
    "agentPresets",
    "agentTeams",
    "agents",
    "appExit",
    "appReady",
    "approval",
    "attachments",
    "authorization",
    "chatFileMentions",
    "clientModules",
    "cmdlineArgs",
    "commandUi",
    "commands",
    "compaction",
    "configForms",
    "connection",
    "contextMenus",
    "conversation",
    "cordisInspect",
    "cotTranslation",
    "credentials",
    "credentialsController",
    "deepseekAccount",
    "deepseekLlmApiExtensions",
    "directoryPicker",
    "directoryPickerController",
    "documentPreviews",
    "dshHomePath",
    "dynamicCordisRunner",
    "feedbackUi",
    "fileActions",
    "fileDrag",
    "fileReferences",
    "fileUpload",
    "fileUploads",
    "forge",
    "forgePanel",
    "forgeSession",
    "fs",
    "goals",
    "hmr",
    "inputTriggers",
    "inspector",
    "jobController",
    "jobs",
    "layout",
    "liveshareShares",
    "llm",
    "loader",
    "locale",
    "mcpResources",
    "messageFeedback",
    "modelDirectories",
    "modules",
    "officeToPdf",
    "otel",
    "permissionPresets",
    "planMode",
    "pluginChanges",
    "pluginInventory",
    "pluginManager",
    "pluginMarket",
    "pluginNavigation",
    "pluginPackages",
    "pluginRecommendations",
    "pluginRegistryProbe",
    "productAnalytics",
    "productTelemetry",
    "profileContext",
    "ptcRuntime",
    "remote",
    "remoteAccess",
    "resources",
    "sandbox",
    "sandboxPolicy",
    "schedule",
    "sdkSessionActivation",
    "sessionController",
    "sessionFeedback",
    "sessionFileReferences",
    "sessionLogDeepSeek",
    "sessionLogDownload",
    "sessionPersistence",
    "sessionProjectionCache",
    "sessionProjections",
    "sessionQuery",
    "sessionReferenceResolver",
    "sessionSkillCatalog",
    "sessionTelemetry",
    "sessionTitle",
    "sessionToolResults",
    "sessions",
    "settingsController",
    "settingsSchema",
    "shell",
    "shellEnv",
    "shortcuts",
    "sidebarRight",
    "sidebarRightTabs",
    "skills",
    "slots",
    "speechController",
    "speechToText",
    "spillStore",
    "storage",
    "storageDomain",
    "subagentModelSelection",
    "subagents",
    "subprocess",
    "systemPrompt",
    "terminalController",
    "terminals",
    "theme",
    "timer",
    "tokenMeter",
    "toolResultPruner",
    "tools",
    "translator",
    "typert",
    "typertGateway",
    "uiConversation",
    "uiRenderer",
    "uiSession",
    "uiWorkspace",
    "userQuestionPanels",
    "userQuestions",
    "web",
    "webApp",
    "webServer",
    "webTerminals",
    "workflowEngine",
    "workingDirectory",
    "workspaceChanges",
    "workspaceController",
    "workspaceFiles",
    "workspaceRegistry",
    "workspaces",
    "worktrees"
  ],
  "catalogOnlyServices": [
    "agentDefaultModel",
    "browserUse",
    "claudeCodeMods",
    "computerUse",
    "configEditor",
    "cuaAccess",
    "headlessStartup",
    "lsp",
    "settings",
    "ssh",
    "webhookRuntime"
  ],
  "runtimeOnlyServices": [
    "accountController",
    "appExit",
    "appReady",
    "chatFileMentions",
    "cmdlineArgs",
    "commandUi",
    "configForms",
    "contextMenus",
    "conversation",
    "cordisInspect",
    "documentPreviews",
    "dshHomePath",
    "dynamicCordisRunner",
    "feedbackUi",
    "fileActions",
    "fileDrag",
    "fileUpload",
    "inputTriggers",
    "layout",
    "loader",
    "locale",
    "modelDirectories",
    "modules",
    "pluginChanges",
    "pluginInventory",
    "pluginNavigation",
    "pluginPackages",
    "remote",
    "resources",
    "sdkSessionActivation",
    "sessionLogDownload",
    "sessionToolResults",
    "settingsSchema",
    "shortcuts",
    "sidebarRight",
    "sidebarRightTabs",
    "slots",
    "theme",
    "uiConversation",
    "uiRenderer",
    "uiSession",
    "uiWorkspace",
    "userQuestionPanels",
    "webTerminals",
    "workspaces"
  ],
  "recordedProviders": {
    "accountController": [
      "dsh-api-account-controller"
    ],
    "appExit": [
      "dsh-cmdline"
    ],
    "appReady": [
      "dsh-cmdline"
    ],
    "chatFileMentions": [
      "dsh-client-ui-deliverables"
    ],
    "cmdlineArgs": [
      "dsh-cmdline"
    ],
    "commandUi": [
      "dsh-client-ui-commands"
    ],
    "configForms": [
      "dsh-client-ui-settings"
    ],
    "contextMenus": [
      "dsh-client-ui-context-menu"
    ],
    "conversation": [
      "dsh-client-ui-conversation"
    ],
    "cordisInspect": [
      "dsh-cordis-client-runner",
      "dsh-cordis-host-runner"
    ],
    "documentPreviews": [
      "dsh-client-ui-sidebar-documentpreview"
    ],
    "dshHomePath": [
      "dsh-app-boot"
    ],
    "dynamicCordisRunner": [
      "dsh-cordis-client-runner",
      "dsh-cordis-host-runner"
    ],
    "feedbackUi": [
      "dsh-client-ui-message-feedback"
    ],
    "fileActions": [
      "dsh-client-ui-file-actions"
    ],
    "fileDrag": [
      "dsh-client-ui-file-drag"
    ],
    "fileUpload": [
      "dsh-client-file-upload"
    ],
    "inputTriggers": [
      "dsh-client-ui-input-trigger"
    ],
    "layout": [
      "dsh-client-ui-layout"
    ],
    "loader": [
      "cordis-plugin-loader"
    ],
    "locale": [
      "dsh-client-locale"
    ],
    "modelDirectories": [
      "dsh-client-ui-model-selection"
    ],
    "modules": [
      "dsh-client-modules"
    ],
    "pluginChanges": [
      "dsh-client-ui-plugin-manager"
    ],
    "pluginInventory": [
      "dsh-host-plugin-inventory"
    ],
    "pluginNavigation": [
      "dsh-client-ui-plugin-manager"
    ],
    "pluginPackages": [
      "dsh-app-boot"
    ],
    "remote": [
      "dsh-api-gateway"
    ],
    "resources": [
      "dsh-client-resources"
    ],
    "sdkSessionActivation": [
      "dsh-sdk-jsonrpc-server"
    ],
    "sessionLogDownload": [
      "dsh-session-log-export"
    ],
    "sessionToolResults": [
      "dsh-client-ui-trajectory"
    ],
    "settingsSchema": [
      "dsh-client-ui-settings"
    ],
    "shortcuts": [
      "dsh-client-shortcuts"
    ],
    "sidebarRight": [
      "dsh-client-ui-sidebar-right"
    ],
    "sidebarRightTabs": [
      "dsh-client-ui-sidebar-right"
    ],
    "slots": [
      "dsh-client-ui-renderer"
    ],
    "theme": [
      "dsh-client-ui-theme"
    ],
    "uiConversation": [
      "dsh-client-ui-conversation"
    ],
    "uiRenderer": [
      "dsh-client-ui-renderer"
    ],
    "uiSession": [
      "dsh-client-ui-session"
    ],
    "uiWorkspace": [
      "dsh-client-ui-workspace"
    ],
    "userQuestionPanels": [
      "dsh-client-ui-user-questions"
    ],
    "webTerminals": [
      "dsh-api-terminal-controller"
    ],
    "workspaces": [
      "dsh-api-workspace-controller"
    ]
  },
  "runtimeServiceProviders": {
    "loader": [
      "cordis-plugin-loader"
    ],
    "timer": [
      "cordis-plugin-timer",
      "dsh-cordis-client-runner"
    ],
    "profileContext": [
      "dsh"
    ],
    "actionCards": [
      "dsh-action-cards",
      "dsh-client-ui-action-cards"
    ],
    "agents": [
      "dsh-agent"
    ],
    "agentLoop": [
      "dsh-agent-loop"
    ],
    "agentPresets": [
      "dsh-agent-preset-registry"
    ],
    "accountController": [
      "dsh-api-account-controller"
    ],
    "remote": [
      "dsh-api-gateway"
    ],
    "typertGateway": [
      "dsh-api-gateway"
    ],
    "jobs": [
      "dsh-api-job-controller",
      "dsh-jobs"
    ],
    "jobController": [
      "dsh-api-job-controller"
    ],
    "remoteAccess": [
      "dsh-api-remote-access"
    ],
    "sessions": [
      "dsh-api-session-controller",
      "dsh-session"
    ],
    "sessionFileReferences": [
      "dsh-api-session-controller"
    ],
    "sessionSkillCatalog": [
      "dsh-api-session-controller"
    ],
    "sessionController": [
      "dsh-api-session-controller"
    ],
    "credentialsController": [
      "dsh-api-settings-controller"
    ],
    "settingsController": [
      "dsh-api-settings-controller"
    ],
    "webTerminals": [
      "dsh-api-terminal-controller"
    ],
    "terminalController": [
      "dsh-api-terminal-controller"
    ],
    "workspaces": [
      "dsh-api-workspace-controller"
    ],
    "directoryPickerController": [
      "dsh-api-workspace-controller"
    ],
    "workspaceController": [
      "dsh-api-workspace-controller"
    ],
    "workspaceFiles": [
      "dsh-api-workspace-files"
    ],
    "pluginPackages": [
      "dsh-app-boot"
    ],
    "dshHomePath": [
      "dsh-app-boot"
    ],
    "attachments": [
      "dsh-attachment"
    ],
    "authorization": [
      "dsh-authorization"
    ],
    "connection": [
      "dsh-client-connection"
    ],
    "fileUpload": [
      "dsh-client-file-upload"
    ],
    "fileUploads": [
      "dsh-client-file-upload"
    ],
    "locale": [
      "dsh-client-locale"
    ],
    "modules": [
      "dsh-client-modules"
    ],
    "clientModules": [
      "dsh-client-modules"
    ],
    "productAnalytics": [
      "dsh-client-product-analytics"
    ],
    "resources": [
      "dsh-client-resources"
    ],
    "shortcuts": [
      "dsh-client-shortcuts"
    ],
    "commandUi": [
      "dsh-client-ui-commands"
    ],
    "contextMenus": [
      "dsh-client-ui-context-menu"
    ],
    "uiConversation": [
      "dsh-client-ui-conversation"
    ],
    "conversation": [
      "dsh-client-ui-conversation"
    ],
    "chatFileMentions": [
      "dsh-client-ui-deliverables"
    ],
    "fileActions": [
      "dsh-client-ui-file-actions"
    ],
    "fileDrag": [
      "dsh-client-ui-file-drag"
    ],
    "inputTriggers": [
      "dsh-client-ui-input-trigger"
    ],
    "layout": [
      "dsh-client-ui-layout"
    ],
    "feedbackUi": [
      "dsh-client-ui-message-feedback"
    ],
    "modelDirectories": [
      "dsh-client-ui-model-selection"
    ],
    "pluginChanges": [
      "dsh-client-ui-plugin-manager"
    ],
    "pluginNavigation": [
      "dsh-client-ui-plugin-manager"
    ],
    "pluginRegistryProbe": [
      "dsh-client-ui-plugin-manager"
    ],
    "slots": [
      "dsh-client-ui-renderer"
    ],
    "uiRenderer": [
      "dsh-client-ui-renderer"
    ],
    "uiSession": [
      "dsh-client-ui-session"
    ],
    "settingsSchema": [
      "dsh-client-ui-settings"
    ],
    "configForms": [
      "dsh-client-ui-settings"
    ],
    "documentPreviews": [
      "dsh-client-ui-sidebar-documentpreview"
    ],
    "sidebarRightTabs": [
      "dsh-client-ui-sidebar-right"
    ],
    "sidebarRight": [
      "dsh-client-ui-sidebar-right"
    ],
    "theme": [
      "dsh-client-ui-theme"
    ],
    "sessionToolResults": [
      "dsh-client-ui-trajectory"
    ],
    "userQuestionPanels": [
      "dsh-client-ui-user-questions"
    ],
    "uiWorkspace": [
      "dsh-client-ui-workspace"
    ],
    "cmdlineArgs": [
      "dsh-cmdline"
    ],
    "appExit": [
      "dsh-cmdline"
    ],
    "appReady": [
      "dsh-cmdline"
    ],
    "sessionFeedback": [
      "dsh-command-feedback"
    ],
    "commands": [
      "dsh-commands"
    ],
    "compaction": [
      "dsh-compaction"
    ],
    "toolResultPruner": [
      "dsh-compaction-tool-result-pruner"
    ],
    "cordisInspect": [
      "dsh-cordis-client-runner",
      "dsh-cordis-host-runner"
    ],
    "dynamicCordisRunner": [
      "dsh-cordis-client-runner",
      "dsh-cordis-host-runner"
    ],
    "credentials": [
      "dsh-credentials"
    ],
    "deepseekAccount": [
      "dsh-deepseek-account"
    ],
    "deepseekLlmApiExtensions": [
      "dsh-deepseek-llm-api-extensions"
    ],
    "agentTeams": [
      "dsh-experimental-agent-team"
    ],
    "speechController": [
      "dsh-experimental-api-speech-to-text"
    ],
    "cotTranslation": [
      "dsh-experimental-client-ui-cot-translation"
    ],
    "forgePanel": [
      "dsh-experimental-client-ui-forge"
    ],
    "forge": [
      "dsh-experimental-forge"
    ],
    "forgeSession": [
      "dsh-experimental-forge-session"
    ],
    "inspector": [
      "dsh-experimental-inspector"
    ],
    "liveshareShares": [
      "dsh-experimental-liveshare"
    ],
    "speechToText": [
      "dsh-experimental-speech-to-text"
    ],
    "translator": [
      "dsh-experimental-translator"
    ],
    "worktrees": [
      "dsh-experimental-worktree"
    ],
    "fileReferences": [
      "dsh-file-reference"
    ],
    "fs": [
      "dsh-fs"
    ],
    "goals": [
      "dsh-goal"
    ],
    "hmr": [
      "dsh-hmr"
    ],
    "directoryPicker": [
      "dsh-host-directory-picker"
    ],
    "pluginInventory": [
      "dsh-host-plugin-inventory"
    ],
    "productTelemetry": [
      "dsh-host-product-telemetry-otel"
    ],
    "webServer": [
      "dsh-host-webserver"
    ],
    "llm": [
      "dsh-llm",
      "dsh-repeat-tool-reminder",
      "dsh-tmux-context"
    ],
    "mcpResources": [
      "dsh-mcp-resources"
    ],
    "messageFeedback": [
      "dsh-message-feedback"
    ],
    "officeToPdf": [
      "dsh-office-to-pdf"
    ],
    "otel": [
      "dsh-otel"
    ],
    "permissionPresets": [
      "dsh-permission-presets"
    ],
    "planMode": [
      "dsh-plan-mode"
    ],
    "pluginManager": [
      "dsh-plugin-manager"
    ],
    "pluginMarket": [
      "dsh-plugin-market"
    ],
    "pluginRecommendations": [
      "dsh-plugin-recommendations"
    ],
    "ptcRuntime": [
      "dsh-ptc-runtime"
    ],
    "sandbox": [
      "dsh-sandbox"
    ],
    "sandboxPolicy": [
      "dsh-sandbox-policy"
    ],
    "schedule": [
      "dsh-schedule"
    ],
    "sdkSessionActivation": [
      "dsh-sdk-jsonrpc-server"
    ],
    "sessionLogDeepSeek": [
      "dsh-session-log-deepseek"
    ],
    "sessionLogDownload": [
      "dsh-session-log-export"
    ],
    "sessionPersistence": [
      "dsh-session-persistence"
    ],
    "sessionProjections": [
      "dsh-session-projection"
    ],
    "sessionProjectionCache": [
      "dsh-session-projection-cache"
    ],
    "sessionQuery": [
      "dsh-session-query"
    ],
    "sessionReferenceResolver": [
      "dsh-session-reference"
    ],
    "sessionTelemetry": [
      "dsh-session-telemetry"
    ],
    "sessionTitle": [
      "dsh-session-title"
    ],
    "shell": [
      "dsh-shell"
    ],
    "shellEnv": [
      "dsh-shell-env"
    ],
    "skills": [
      "dsh-skill"
    ],
    "spillStore": [
      "dsh-spill"
    ],
    "storage": [
      "dsh-storage"
    ],
    "storageDomain": [
      "dsh-storage-domain"
    ],
    "subagents": [
      "dsh-subagent"
    ],
    "subprocess": [
      "dsh-subprocess"
    ],
    "systemPrompt": [
      "dsh-system-prompt"
    ],
    "terminals": [
      "dsh-terminal"
    ],
    "tokenMeter": [
      "dsh-token-meter"
    ],
    "subagentModelSelection": [
      "dsh-tool-subagent"
    ],
    "tools": [
      "dsh-tools"
    ],
    "typert": [
      "dsh-typert-registry"
    ],
    "approval": [
      "dsh-user-approval"
    ],
    "userQuestions": [
      "dsh-user-questions"
    ],
    "web": [
      "dsh-web"
    ],
    "webApp": [
      "dsh-web-app"
    ],
    "workflowEngine": [
      "dsh-workflow"
    ],
    "workingDirectory": [
      "dsh-working-directory"
    ],
    "workspaceRegistry": [
      "dsh-workspace"
    ],
    "workspaceChanges": [
      "dsh-workspace-changes"
    ]
  },
  "inheritedCtx": [
    "accessor",
    "bail",
    "deps",
    "effect",
    "emit",
    "events",
    "extend",
    "fiber",
    "filter",
    "get",
    "inject",
    "intercept",
    "isolate",
    "loader",
    "logger",
    "mixin",
    "name",
    "on",
    "once",
    "parallel",
    "plugin",
    "provide",
    "reflect",
    "registry",
    "root",
    "select",
    "serial",
    "set",
    "timer",
    "waterfall"
  ],
  "events": [
    {
      "name": "agent-loop/config-start-failed",
      "mode": "emit"
    },
    {
      "name": "agent-preset/selected",
      "mode": "emit"
    },
    {
      "name": "agent/assistant-stream",
      "mode": "emit"
    },
    {
      "name": "agent/created",
      "mode": "serial"
    },
    {
      "name": "agent/disposed",
      "mode": "emit"
    },
    {
      "name": "agent/error",
      "mode": "emit"
    },
    {
      "name": "agent/inbox/claimed",
      "mode": "emit"
    },
    {
      "name": "agent/inbox/discarded",
      "mode": "emit"
    },
    {
      "name": "agent/inbox/inserted",
      "mode": "emit"
    },
    {
      "name": "agent/pre-step",
      "mode": "waterfall"
    },
    {
      "name": "agent/request-error",
      "mode": "waterfall"
    },
    {
      "name": "agent/status",
      "mode": "emit"
    },
    {
      "name": "agent/turn-stopping",
      "mode": "serial"
    },
    {
      "name": "api-session/activity",
      "mode": "emit"
    },
    {
      "name": "api-session/added",
      "mode": "emit"
    },
    {
      "name": "api-session/error",
      "mode": "emit"
    },
    {
      "name": "api-session/removed",
      "mode": "emit"
    },
    {
      "name": "api-session/status",
      "mode": "emit"
    },
    {
      "name": "app-boot/config-reload",
      "mode": "emit"
    },
    {
      "name": "approval/request",
      "mode": "waterfall"
    },
    {
      "name": "authorization/settled",
      "mode": "emit"
    },
    {
      "name": "commands/change",
      "mode": "emit"
    },
    {
      "name": "compaction/summary-error",
      "mode": "waterfall"
    },
    {
      "name": "connection/request",
      "mode": "waterfall"
    },
    {
      "name": "cordis/dynamic-package",
      "mode": "emit"
    },
    {
      "name": "cordis/dynamic-retract",
      "mode": "emit"
    },
    {
      "name": "cordis/inspect-query",
      "mode": "emit"
    },
    {
      "name": "cordis/inspect-query-resolved",
      "mode": "emit"
    },
    {
      "name": "cordis/request-run",
      "mode": "emit"
    },
    {
      "name": "cordis/request-run-resolved",
      "mode": "emit"
    },
    {
      "name": "credentials/record-updated",
      "mode": "emit"
    },
    {
      "name": "credentials/reference-updated",
      "mode": "emit"
    },
    {
      "name": "deepseek-account/model-sign-in-required",
      "mode": "emit"
    },
    {
      "name": "deepseek-account/session-expired",
      "mode": "emit"
    },
    {
      "name": "deepseek-account/signed-out",
      "mode": "emit"
    },
    {
      "name": "domain/changed",
      "mode": "emit"
    },
    {
      "name": "feedback/committed",
      "mode": "parallel"
    },
    {
      "name": "forge/providers-changed",
      "mode": "parallel"
    },
    {
      "name": "fs/delete-intent",
      "mode": "waterfall"
    },
    {
      "name": "fs/edit-intent",
      "mode": "waterfall"
    },
    {
      "name": "fs/observed",
      "mode": "emit"
    },
    {
      "name": "fs/write-intent",
      "mode": "waterfall"
    },
    {
      "name": "goal/activation-changed",
      "mode": "emit"
    },
    {
      "name": "goal/changed",
      "mode": "emit"
    },
    {
      "name": "hmr/change",
      "mode": "emit"
    },
    {
      "name": "hmr/reload",
      "mode": "emit"
    },
    {
      "name": "llm-pi-ai/request-headers",
      "mode": "waterfall"
    },
    {
      "name": "llm/adapters-updated",
      "mode": "emit"
    },
    {
      "name": "llm/models-updated",
      "mode": "emit"
    },
    {
      "name": "llm/stream",
      "mode": "waterfall"
    },
    {
      "name": "permission-presets/catalog-changed",
      "mode": "emit"
    },
    {
      "name": "plugin-manager/changed",
      "mode": "emit"
    },
    {
      "name": "plugin-manager/install-log",
      "mode": "emit"
    },
    {
      "name": "plugin-manager/install-state",
      "mode": "emit"
    },
    {
      "name": "plugin-manager/operation",
      "mode": "parallel"
    },
    {
      "name": "plugin-manager/update-state",
      "mode": "emit"
    },
    {
      "name": "plugin-market/changed",
      "mode": "emit"
    },
    {
      "name": "schedule/changed",
      "mode": "emit"
    },
    {
      "name": "schedule/resolve-agent",
      "mode": "waterfall"
    },
    {
      "name": "session-telemetry/record",
      "mode": "waterfall"
    },
    {
      "name": "session/created",
      "mode": "emit"
    },
    {
      "name": "session/disposed",
      "mode": "emit"
    },
    {
      "name": "session/event",
      "mode": "emit"
    },
    {
      "name": "session/flush",
      "mode": "parallel"
    },
    {
      "name": "settings/document-updated",
      "mode": "emit"
    },
    {
      "name": "skills/change",
      "mode": "emit"
    },
    {
      "name": "subagent/end",
      "mode": "emit"
    },
    {
      "name": "subagent/provider-added",
      "mode": "emit"
    },
    {
      "name": "subagent/provider-removed",
      "mode": "emit"
    },
    {
      "name": "subagent/start",
      "mode": "emit"
    },
    {
      "name": "system-prompt/assemble",
      "mode": "waterfall"
    },
    {
      "name": "system-prompt/change",
      "mode": "emit"
    },
    {
      "name": "tools/change",
      "mode": "emit"
    },
    {
      "name": "tools/execute",
      "mode": "waterfall"
    },
    {
      "name": "tools/post-execute",
      "mode": "waterfall"
    },
    {
      "name": "tools/pre-execute",
      "mode": "waterfall"
    },
    {
      "name": "tools/ptc-dispatch-log",
      "mode": "waterfall"
    },
    {
      "name": "tools/result",
      "mode": "emit"
    },
    {
      "name": "user-questions/request",
      "mode": "waterfall"
    },
    {
      "name": "webserver/index-inject",
      "mode": "emit"
    },
    {
      "name": "workflow/agent-end",
      "mode": "emit"
    },
    {
      "name": "workflow/agent-start",
      "mode": "emit"
    },
    {
      "name": "workflow/end",
      "mode": "emit"
    },
    {
      "name": "workflow/log",
      "mode": "emit"
    },
    {
      "name": "workflow/phase",
      "mode": "emit"
    },
    {
      "name": "workflow/start",
      "mode": "emit"
    },
    {
      "name": "workspace/session-activity",
      "mode": "waterfall"
    },
    {
      "name": "workspace/session-stop",
      "mode": "parallel"
    }
  ],
  "waterfallEvents": [
    "agent/pre-step",
    "agent/request-error",
    "approval/request",
    "compaction/summary-error",
    "connection/request",
    "fs/delete-intent",
    "fs/edit-intent",
    "fs/write-intent",
    "llm-pi-ai/request-headers",
    "llm/stream",
    "schedule/resolve-agent",
    "session-telemetry/record",
    "system-prompt/assemble",
    "tools/execute",
    "tools/post-execute",
    "tools/pre-execute",
    "tools/ptc-dispatch-log",
    "user-questions/request",
    "workspace/session-activity"
  ],
  "frameworkWaterfallEvents": [
    "loader/patch-context"
  ],
  "builtinPatchRowIds": [
    "tool-plugin-manager",
    "plugin-manager",
    "timer",
    "hmr",
    "llm",
    "deepseek-llm-api-extensions",
    "session",
    "session-log-deepseek",
    "typert",
    "typert-loader",
    "typert-gateway",
    "remote-access",
    "session-title",
    "session-title-llm",
    "user-questions",
    "agent",
    "plugin-package-inventory-deepseek",
    "agent-default-model",
    "jobs",
    "llm-retry",
    "config-editor",
    "settings",
    "authorization",
    "deepseek-account",
    "credentials",
    "llm-pi-ai",
    "session-persistence-jsonl",
    "attachment-local",
    "session-query-sqlite",
    "working-directory",
    "tool-working-directory",
    "session-projection",
    "storage",
    "storage-json",
    "storage-domain",
    "session-projection-cache",
    "otel",
    "session-telemetry-otel",
    "subprocess",
    "sandbox",
    "sandbox-policy",
    "bash-sandbox",
    "pwsh-sandbox",
    "approval",
    "permission",
    "shell-env",
    "tool-bash",
    "tool-pwsh",
    "tool-jobs",
    "fs-observation-policy",
    "tool-fs",
    "tool-fs-search",
    "agent-instructions",
    "skill",
    "skill-filesystem",
    "tool-skill",
    "commands",
    "command-feedback",
    "goal",
    "goal-round-driver",
    "command-goal",
    "plan-mode",
    "token-meter",
    "compaction-basic",
    "command-compact",
    "subagent",
    "subagent-spawn-in-process",
    "subagent-fork-in-process",
    "tool-subagent-control",
    "tool-subagent",
    "tool-subagent-fork",
    "ptc-runtime",
    "workflow-ptc",
    "tool-workflow",
    "timeout-policy",
    "spill-local",
    "spill-policy",
    "session-checkpoint-policy",
    "tool-result-pruner",
    "image-offload",
    "tool-todo",
    "tool-goal",
    "repeat-tool-reminder",
    "web",
    "web-search-deepseek",
    "web-deepseek-api",
    "web-fetch-http",
    "tool-web",
    "mcp-resources",
    "tools",
    "tool-executor-native",
    "tool-executor-ptc",
    "system-prompt",
    "agent-loop",
    "fs-sandbox",
    "llm-deepseek",
    "llm-deepseek-account"
  ],
  "evaluatedPeerNames": [
    "@agentclientprotocol/sdk",
    "@deepseek-ai/cordis",
    "@deepseek-ai/cordis-plugin-include",
    "@deepseek-ai/cordis-plugin-loader",
    "@deepseek-ai/cordis-plugin-timer",
    "@deepseek-ai/dsh-acp",
    "@deepseek-ai/dsh-acp-app",
    "@deepseek-ai/dsh-agent",
    "@deepseek-ai/dsh-agent-instructions",
    "@deepseek-ai/dsh-agent-loop",
    "@deepseek-ai/dsh-agent-loop-testkit",
    "@deepseek-ai/dsh-agent-preset",
    "@deepseek-ai/dsh-agent-tool-presentation",
    "@deepseek-ai/dsh-app-boot",
    "@deepseek-ai/dsh-atomic-write",
    "@deepseek-ai/dsh-attachment-local",
    "@deepseek-ai/dsh-base",
    "@deepseek-ai/dsh-bash-local",
    "@deepseek-ai/dsh-client-ui-agent-preset",
    "@deepseek-ai/dsh-client-ui-cordis",
    "@deepseek-ai/dsh-cmdline",
    "@deepseek-ai/dsh-command-compact",
    "@deepseek-ai/dsh-command-goal",
    "@deepseek-ai/dsh-compaction-basic",
    "@deepseek-ai/dsh-compaction-tool-result-pruner",
    "@deepseek-ai/dsh-cordis-client-runner",
    "@deepseek-ai/dsh-credentials-local",
    "@deepseek-ai/dsh-deepseek-llm-api-extensions",
    "@deepseek-ai/dsh-experimental-agent-team",
    "@deepseek-ai/dsh-experimental-agent-team-profile",
    "@deepseek-ai/dsh-experimental-auto-review",
    "@deepseek-ai/dsh-experimental-badge-skill-bundle",
    "@deepseek-ai/dsh-experimental-cot-translation-bundle",
    "@deepseek-ai/dsh-experimental-forge-bundle",
    "@deepseek-ai/dsh-experimental-inspector-profile",
    "@deepseek-ai/dsh-experimental-liveshare",
    "@deepseek-ai/dsh-experimental-plugin-market-bundle",
    "@deepseek-ai/dsh-experimental-ptc-runtime-python",
    "@deepseek-ai/dsh-experimental-ralph-bundle",
    "@deepseek-ai/dsh-experimental-session-search",
    "@deepseek-ai/dsh-experimental-session-titles-bundle",
    "@deepseek-ai/dsh-experimental-terminal-bundle",
    "@deepseek-ai/dsh-experimental-tool-agent-team",
    "@deepseek-ai/dsh-experimental-tool-worktree",
    "@deepseek-ai/dsh-experimental-voice-input-bundle",
    "@deepseek-ai/dsh-fs-local",
    "@deepseek-ai/dsh-fs-observation-policy",
    "@deepseek-ai/dsh-fs-sandbox",
    "@deepseek-ai/dsh-goal",
    "@deepseek-ai/dsh-goal-round-driver",
    "@deepseek-ai/dsh-headless",
    "@deepseek-ai/dsh-hmr",
    "@deepseek-ai/dsh-home-paths",
    "@deepseek-ai/dsh-hooks-claude-code",
    "@deepseek-ai/dsh-hooks-codex",
    "@deepseek-ai/dsh-host-frontend-static",
    "@deepseek-ai/dsh-host-webserver",
    "@deepseek-ai/dsh-http-proxy",
    "@deepseek-ai/dsh-jobs-local",
    "@deepseek-ai/dsh-launch-environment",
    "@deepseek-ai/dsh-llm",
    "@deepseek-ai/dsh-llm-deepseek",
    "@deepseek-ai/dsh-llm-deepseek-account",
    "@deepseek-ai/dsh-llm-deepseek-api-key",
    "@deepseek-ai/dsh-llm-mock-server",
    "@deepseek-ai/dsh-llm-pi-ai",
    "@deepseek-ai/dsh-llm-replay",
    "@deepseek-ai/dsh-loader-smoke",
    "@deepseek-ai/dsh-mcp-client",
    "@deepseek-ai/dsh-mcp-resources",
    "@deepseek-ai/dsh-official-bundles",
    "@deepseek-ai/dsh-persona",
    "@deepseek-ai/dsh-personalized-recommendations",
    "@deepseek-ai/dsh-plan-mode",
    "@deepseek-ai/dsh-plugin-manager",
    "@deepseek-ai/dsh-plugin-package-inventory-deepseek",
    "@deepseek-ai/dsh-pwsh-local",
    "@deepseek-ai/dsh-pwsh-sandbox",
    "@deepseek-ai/dsh-sandbox-local",
    "@deepseek-ai/dsh-sandbox-policy",
    "@deepseek-ai/dsh-schedule",
    "@deepseek-ai/dsh-sdk-app",
    "@deepseek-ai/dsh-sdk-client",
    "@deepseek-ai/dsh-sdk-minimal",
    "@deepseek-ai/dsh-session",
    "@deepseek-ai/dsh-session-checkpoint-policy",
    "@deepseek-ai/dsh-session-log-deepseek",
    "@deepseek-ai/dsh-session-persistence-jsonl",
    "@deepseek-ai/dsh-session-projection",
    "@deepseek-ai/dsh-session-query",
    "@deepseek-ai/dsh-session-reference",
    "@deepseek-ai/dsh-settings",
    "@deepseek-ai/dsh-shell-env",
    "@deepseek-ai/dsh-skill",
    "@deepseek-ai/dsh-skill-badge",
    "@deepseek-ai/dsh-skill-filesystem",
    "@deepseek-ai/dsh-skill-office",
    "@deepseek-ai/dsh-subagent",
    "@deepseek-ai/dsh-subagent-fork-in-process",
    "@deepseek-ai/dsh-subagent-spawn-in-process",
    "@deepseek-ai/dsh-subprocess-local",
    "@deepseek-ai/dsh-system-prompt",
    "@deepseek-ai/dsh-terminal",
    "@deepseek-ai/dsh-terminal-bash",
    "@deepseek-ai/dsh-time-context",
    "@deepseek-ai/dsh-tmux-context",
    "@deepseek-ai/dsh-token-meter",
    "@deepseek-ai/dsh-tool-ask-user",
    "@deepseek-ai/dsh-tool-bash",
    "@deepseek-ai/dsh-tool-bash-persistent",
    "@deepseek-ai/dsh-tool-cordis",
    "@deepseek-ai/dsh-tool-fs",
    "@deepseek-ai/dsh-tool-fs-search",
    "@deepseek-ai/dsh-tool-goal",
    "@deepseek-ai/dsh-tool-jobs",
    "@deepseek-ai/dsh-tool-present",
    "@deepseek-ai/dsh-tool-pwsh",
    "@deepseek-ai/dsh-tool-pwsh-persistent",
    "@deepseek-ai/dsh-tool-ralph",
    "@deepseek-ai/dsh-tool-schedule",
    "@deepseek-ai/dsh-tool-skill",
    "@deepseek-ai/dsh-tool-str-replace-editor",
    "@deepseek-ai/dsh-tool-subagent",
    "@deepseek-ai/dsh-tool-subagent-control",
    "@deepseek-ai/dsh-tool-testkit",
    "@deepseek-ai/dsh-tool-todo",
    "@deepseek-ai/dsh-tool-web",
    "@deepseek-ai/dsh-tool-workflow",
    "@deepseek-ai/dsh-tool-workspace-dependencies",
    "@deepseek-ai/dsh-tools",
    "@deepseek-ai/dsh-user-approval",
    "@deepseek-ai/dsh-web-app",
    "@deepseek-ai/dsh-webhook",
    "@deepseek-ai/dsh-webhook-github",
    "@deepseek-ai/dsh-workflow-ptc",
    "@deepseek-ai/schemastery",
    "@types/js-yaml",
    "@types/ws",
    "ajv",
    "commander",
    "execa",
    "js-yaml",
    "node-addon-require-builtin",
    "ws"
  ]
}
