export function targetLength(rng=Math.random){return 30+rng()*55;}
export function normalizePointer(x,left,width){if(!Number.isFinite(width)||width<=0)throw new RangeError('需要有效的参考宽度.');return Math.max(0,Math.min(100,(x-left)/width*100));}
export function evaluate(target,copy){if(![target,copy].every(v=>Number.isFinite(v)&&v>=0&&v<=100)||target===0)throw new RangeError('长度范围误差');const error=Math.abs(copy-target)/target*100;return {target,copy,error,accuracy:Math.max(0,100-error)};}
export function summarize(rounds){if(rounds.length!==3)throw new RangeError('需要三个版本的记录');const accuracy=rounds.reduce((s,r)=>s+r.accuracy,0)/3;return {accuracy,title:accuracy>=97?'目测复制大师':accuracy>=90?'记得住线条的眼睛':accuracy>=80?'相当敏锐的目测':'还在探索长度'};}
