export function targetLength(rng=Math.random){return 30+rng()*55;}
export function normalizePointer(x,left,width){if(!Number.isFinite(width)||width<=0)throw new RangeError('유효한 기준 폭이 필요합니다.');return Math.max(0,Math.min(100,(x-left)/width*100));}
export function evaluate(target,copy){if(![target,copy].every(v=>Number.isFinite(v)&&v>=0&&v<=100)||target===0)throw new RangeError('길이 범위 오류');const error=Math.abs(copy-target)/target*100;return {target,copy,error,accuracy:Math.max(0,100-error)};}
export function summarize(rounds){if(rounds.length!==3)throw new RangeError('세 판의 기록 필요');const accuracy=rounds.reduce((s,r)=>s+r.accuracy,0)/3;return {accuracy,title:accuracy>=97?'눈대중 복사의 장인':accuracy>=90?'선을 기억하는 눈':accuracy>=80?'제법 섬세한 눈대중':'길이를 탐험하는 눈'};}
