const fs = require('fs-extra');
const path = require('path');

const VERMOJIS = [
"💯",
"☀️",
"☕️",
"♨️",
"✈️",
"✨",
"❄️",
"❤️",
"☎️",
"⚡️",
"⚽️",
"⚾️",
"⛄️",
"⛑",
"⛰",
"⛱",
"⛲️",
"⛳️",
"⛴",
"⛵️",
"⛷",
"⛸",
"⛹",
"⛺️",
"⭐️",
"🌀",
"🌁",
"🌃",
"🌄",
"🌅",
"🌇",
"🌈",
"🌍",
"🌎",
"🌏",
"🌐",
"🌙",
"🌜",
"🌝",
"🌞",
"🌟",
"🌪",
"🌭",
"🌮",
"🌯",
"🌱",
"🌲",
"🌳",
"🌴",
"🌵",
"🌶",
"🌷",
"🌸",
"🌹",
"🌺",
"🌻",
"🌼",
"🍀",
"🍁",
"🍅",
"🍇",
"🍈",
"🍉",
"🍊",
"🍋",
"🍌",
"🍍",
"🍎",
"🍏",
"🍐",
"🍒",
"🍓",
"🍔",
"🍕",
"🍖",
"🍗",
"🍜",
"🍝",
"🍞",
"🍟",
"🍡",
"🍣",
"🍤",
"🍦",
"🍧",
"🍨",
"🍩",
"🍪",
"🍫",
"🍬",
"🍭",
"🍮",
"🍯",
"🍰",
"🍲",
"🍵",
"🍷",
"🍸",
"🍹",
"🍺",
"🍻",
"🥃",
"🍾",
"🍿",
"🎀",
"🎁",
"🎂",
"🎆",
"🎇",
"🎈",
"🎉",
"🎊",
"🎖",
"🎙",
"🎠",
"🎡",
"🎢",
"🎤",
"🎨",
"🎩",
"🎪",
"🎬",
"🎭",
"🎯",
"🎰",
"🎱",
"🎲",
"🎳",
"🎷",
"🎸",
"🎹",
"🎺",
"🎻",
"🎾",
"🎿",
"🏀",
"🏁",
"🏂",
"🏃",
"🏄",
"🏅",
"🏆",
"🏇",
"🏈",
"🏉",
"🏊",
"🏋",
"🏌",
"🏍",
"🏎",
"🏏",
"🏐",
"🏑",
"🏒",
"🏓",
"🏔",
"🏕",
"🏖",
"🏙",
"🏜",
"🏝",
"🏰",
"🏵",
"🏸",
"🏹",
"🐁",
"🐂",
"🐄",
"🐅",
"🐆",
"🐇",
"🐈",
"🐉",
"🐊",
"🐋",
"🐌",
"🐍",
"🐎",
"🐏",
"🐐",
"🐒",
"🐓",
"🐔",
"🐕",
"🐖",
"🐗",
"🐘",
"🐙",
"🐚",
"🐛",
"🐝",
"🐞",
"🐟",
"🐠",
"🐡",
"🐢",
"🐣",
"🐤",
"🐥",
"🐦",
"🐧",
"🐨",
"🐩",
"🐫",
"🐬",
"🐭",
"🐮",
"🐯",
"🐰",
"🐱",
"🐳",
"🐴",
"🐵",
"🐶",
"🐷",
"🐸",
"🐹",
"🐺",
"🐻",
"🐼",
"🐽",
"🐿",
"👀",
"👑",
"👒",
"👻",
"👽",
"👾",
"💀",
"💍",
"💙",
"💚",
"💛",
"💡",
"💥",
"💪",
"💫",
"💾",
"💿",
"📌",
"📍",
"📟",
"🛰",
"📢",
"📣",
"📬",
"📷",
"📺",
"📻",
"🔈",
"🔋",
"🔑",
"🔔",
"🔥",
"🔬",
"🔭",
"🔮",
"🕊",
"🕹",
"🖍",
"🗻",
"😀",
"😃",
"😄",
"😈",
"😊",
"😋",
"😎",
"😛",
"😜",
"😸",
"🤓",
"🤖",
"🚀",
"🚁",
"🚂",
"🚃",
"🚅",
"🚋",
"🚌",
"🚍",
"🚎",
"🚐",
"🚑",
"🚒",
"🚓",
"🚔",
"🚕",
"🚖",
"🚗",
"🚘",
"🚙",
"🚚",
"🚛",
"🚜",
"🚞",
"🚟",
"🚠",
"🚡",
"🚢",
"🚣",
"🚤",
"🚦",
"🚨",
"🚩",
"🛠",
"🛥",
"🛩",
"🛳",
"🤘",
"🦀",
"🦁",
"🦂",
"🦃",
"🦄",
"🧀"
];

const changelogPath = path.join(__dirname, '../CHANGELOG.md');
let changelog = fs.readFileSync(changelogPath, 'utf8');

function getNextVermoji() {
  while (true) {
    const vermoji = VERMOJIS[Math.round(Math.random() * (VERMOJIS.length - 1))];
    if (!changelog.includes(vermoji)) {
      return vermoji;
    }
  }
}

const vermoji = getNextVermoji();

changelog = changelog.replace(/\# \[/, '# ' + vermoji + ' [');

fs.writeFileSync(changelogPath, changelog);

const compilerPath = path.join(__dirname, '..', 'dist', 'compiler', 'index.js');
let compiler = fs.readFileSync(compilerPath, 'utf8');

compiler = compiler.replace(/\💎/g, vermoji);
fs.writeFileSync(compilerPath, compiler);
