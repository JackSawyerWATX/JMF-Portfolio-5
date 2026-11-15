const buildings = Array.from({ length: 31 }, (_, i) => ({ x: i * 34 - 18, w: 24 + (i * 7 % 19), h: 40 + (i * 37 % 105) }));
const cloud = "M0 24h16V12h20V4h36v8h20v12h20v12H0Z";
export const SeattleScene = () => <div className="seattle-scene" aria-hidden="true">
  <svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMax slice" shapeRendering="crispEdges">
    <g className="scene-clouds" fill="var(--cloud)"><path d={cloud} transform="translate(52 23) scale(1.1)"/><path d={cloud} transform="translate(440 61) scale(.7)"/><path d={cloud} transform="translate(770 10) scale(1.4)"/></g>
    <g className="scene-sun"><path fill="#f1c96c" d="M704 38h28v8h8v28h-8v8h-28v-8h-8V46h8Z"/><path fill="#ffe8a6" d="M708 42h20v8h8v16h-8v8h-20v-8h-8V50h8Z"/></g>
    <path fill="var(--mountain)" d="M410 229h25v-12h24v-14h27v-16h22v-17h20v-17h17v-21h18v-18h15v-19h18v19h16v16h18v22h23v18h20v18h24v16h24v15h30v12h40v16H410Z"/>
    <path fill="var(--snow)" d="M528 170v-17h17v-21h18v-18h15v-19h18v19h16v16h18v22h23v18h-21v-10h-18v-12h-18v17h-17v-9h-16v14h-18v-8h-10v8Z"/>
    <g fill="var(--distant)">{buildings.map((b,i)=><rect key={i} x={b.x} y={290-b.h*.75} width={b.w+7} height={b.h*.75+22}/>)}</g>
    <g>{buildings.map((b,i)=><g key={i}><path fill={i%3===0?'var(--building-alt)':'var(--building)'} d={`M${b.x} 337v-${b.h}h5v-8h${b.w-10}v8h5v${b.h}Z`}/><rect x={b.x+3} y={337-b.h} width="3" height={b.h} fill="var(--building-edge)"/>{Array.from({length:Math.floor((b.h-10)/12)},(_,r)=>Array.from({length:Math.floor((b.w-8)/9)},(_,c)=><rect key={`${r}-${c}`} x={b.x+8+c*9} y={345-b.h+r*12} width="3" height="4" fill={(r+c+i)%4===0?'var(--window-lit)':'var(--window)'} />))}</g>)}</g>
    {/* A stepped saucer, slender spire, and open hourglass tripod. */}
    <g className="space-needle">
      <path fill="var(--needle)" d="M237 88h2v29h-2Z"/>
      <rect x="237" y="86" width="2" height="3" fill="#e99770"/>
      <path fill="var(--needle)" d="M233 116h10v5h9v4h10v4h10v4h5v4h-78v-4h5v-4h10v-4h10v-4h9Z"/>
      <path fill="var(--needle-glass)" d="M224 125h28v3h10v3h-48v-3h10Z"/>
      <path fill="var(--needle)" d="M203 137h70v9h-6v4h-12v4h-34v-4h-12v-4h-6Z"/>
      <path fill="var(--needle-glass)" d="M209 138h58v5h-58Z"/>
      <path fill="var(--needle)" d="M218 138h2v5h-2zm10 0h2v5h-2zm10 0h2v5h-2zm10 0h2v5h-2zm10 0h2v5h-2Z"/>
      <rect x="214" y="147" width="48" height="2" fill="var(--building-edge)"/>
      <path fill="var(--needle)" d="M217 153h5v16h2v18h3v19h3v20h3v23h-5v-22h-3v-19h-3v-19h-3v-18h-2Z"/>
      <path fill="var(--needle)" d="M254 153h5v18h-2v18h-3v19h-3v19h-3v22h-5v-23h3v-20h3v-19h3v-18h2Z"/>
      <path fill="var(--needle)" d="M236 154h4v151h-4Z"/>
      <path fill="var(--needle)" d="M228 244h5v18h-3v17h-4v16h-5v15h-5v12h-9v-5h4v-10h5v-14h5v-16h4v-17h3Z"/>
      <path fill="var(--needle)" d="M243 244h5v16h3v17h4v16h5v14h5v10h4v5h-9v-12h-5v-15h-5v-16h-4v-17h-3Z"/>
      <path fill="var(--building-edge)" d="M237 159h1v142h-1Z"/>
      <path fill="var(--needle)" d="M228 244h20v4h-20zm-24 77h16v4h-16zm52 0h16v4h-16Z"/>
    </g>
    <g fill="var(--foreground-city)"><path d="M0 323h47v-19h43v13h26v-21h37v30h63v-12h47v11h39v-25h47v14h45v-6h63v18h49v-31h33v22h57v-13h46v19h40v-29h51v17h28v-7h40v22h47v-33h36v17h29v-7h32v29h43v-16h38v27h49v-19h37v22h64v29H0Z"/><rect y="343" width="1000" height="9"/></g>
    <rect y="352" width="1000" height="68" fill="var(--water)"/>
    <g className="water-glints" fill="var(--reflection)">{Array.from({length:48},(_,i)=><rect key={i} x={(i*137)%1000} y={360+(i*17)%56} width={10+(i*7)%35} height="2" opacity={.3+(i%3)*.2}/>)}</g>
    <g className="ferry-crossing" transform="translate(727 372)"><g className="ferry"><path fill="var(--ferry)" d="M0 12h79l-8 10H11Z"/><path fill="#e7eedc" d="M12 3h49v9H12Z"/><path fill="var(--building)" d="M18 6h6v3h-6zm11 0h6v3h-6zm11 0h6v3h-6z"/><path fill="var(--ferry)" d="M35 0h15v3H35Z"/></g></g>
  </svg>
</div>;



