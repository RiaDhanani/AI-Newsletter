import BeehiivEmbed from './BeehiivEmbed'

export default function ClientPage({ today, year }) {
  return (
    <>
      {/* MASTHEAD */}
      <header className="masthead">
        <div className="masthead-top">
          <span>{today}</span>
        </div>
        <div className="masthead-title">The Signal</div>
        <div className="masthead-subtitle">What matters in AI</div>
      </header>

      {/* TABLE OF CONTENTS */}
      <nav className="toc-wrap">
        <div className="toc-label">In This Issue</div>
        <div className="toc-grid">
          <a href="#hero" className="toc-item"><span className="toc-num">01</span><span className="toc-name">Lead Story</span></a>
          <a href="#trending" className="toc-item"><span className="toc-num">02</span><span className="toc-name">Trending Now</span></a>
          <a href="#spotlight" className="toc-item"><span className="toc-num">03</span><span className="toc-name">Creator Spotlight</span></a>
          <a href="#research" className="toc-item"><span className="toc-num">04</span><span className="toc-name">LLM Research</span></a>
          <a href="#stocks" className="toc-item"><span className="toc-num">05</span><span className="toc-name">Markets</span></a>
          <a href="#podcasts" className="toc-item"><span className="toc-num">06</span><span className="toc-name">Podcasts</span></a>
        </div>
      </nav>

      <main className="page">

        {/* HERO */}
        <section id="hero" className="hero">
          <div className="section-label">Lead Story</div>
          <h1 className="hero-headline">Anthropic Ships Claude Opus 4.8: Four Times More Truthful on Code, Hundreds of Parallel Subagents</h1>
          <p className="hero-deck">Anthropic has released Claude Opus 4.8, a meaningful upgrade to Opus 4.7 built for the agentic era. The headline reliability improvement: the model is around four times less likely than its predecessor to let code flaws pass without flagging them — a direct answer to the most common enterprise complaint about AI coding tools. Two new capabilities ship alongside: dynamic workflows that let Claude Code coordinate hundreds of parallel subagents at once for large-scale tasks like full codebase migrations, and improved tool-calling that completes multi-step agentic jobs in fewer turns.</p>
          <div className="hero-source">Source: <a className="source-link" href="https://www.anthropic.com/news/claude-opus-4-8" target="_blank">Anthropic, May 28, 2026</a></div>
        </section>

        <hr className="divider-thick" />

        {/* TRENDING NOW */}
        <section id="trending">
          <div className="section-label">Trending Now</div>
          <div className="trend-grid">
            <div className="trend-card">
              <div className="trend-number">01</div>
              <div className="trend-headline">Google Buries the Search Box, Launches AI Agents That Work While You Sleep</div>
              <div className="trend-body">At Google I/O, Google announced the biggest overhaul to its search interface in 25 years. The centerpiece is &ldquo;information agents&rdquo; — always-on monitors that watch the web around the clock and deliver synthesized updates on topics you define.</div>
              <a className="trend-source-link" href="https://blog.google/products-and-platforms/products/search/search-io-2026/" target="_blank">Google Blog, May 19, 2026</a>
            </div>
            <div className="trend-card">
              <div className="trend-number">02</div>
              <div className="trend-headline">Fortune 500 CFOs Are Asking One Question About AI: Show Me the ROI</div>
              <div className="trend-body">After two years of pilots and proofs-of-concept, enterprise AI spending is hitting a scrutiny wall. Companies that cannot demonstrate measurable cost reduction or revenue lift are watching budgets shrink fast.</div>
              <a className="trend-source-link" href="#" target="_blank">Bloomberg</a>
            </div>
            <div className="trend-card">
              <div className="trend-number">03</div>
              <div className="trend-headline">OpenAI and Anthropic Are Now Publicly at Odds on Whether AI Will Kill Jobs</div>
              <div className="trend-body">Anthropic co-founder Chris Olah told the Vatican AI ethics conference: &ldquo;There is a real possibility that AI will displace human labor at very large scale.&rdquo; Sam Altman pushed back, saying he was &ldquo;wrong&rdquo; about earlier displacement projections.</div>
              <a className="trend-source-link" href="https://www.axios.com/2026/05/27/ai-hype-doom-openai-anthropic" target="_blank">Axios, May 27, 2026</a>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* CREATOR SPOTLIGHT */}
        <section id="spotlight" className="spotlight">
          <div className="section-label">Creator Spotlight</div>
          <div className="spotlight-quote">Datasette Agent is a new extensible AI assistant for Datasette that can answer questions about data in your SQLite databases and can be extended with plugins to add extra tools and features. I&apos;ve been working toward this convergence of my llm and Datasette projects for over three years.</div>
          <div className="spotlight-attribution">
            <strong>Simon Willison</strong> &nbsp;&middot;&nbsp;
            <a className="spotlight-link" href="https://simonwillison.net/2026/May/24/datasette-agent/" target="_blank">simonwillison.net &mdash; May 24, 2026</a>
            &nbsp;&middot;&nbsp; Dev &amp; Code
          </div>
        </section>

        <hr className="divider" />

        {/* LLM RESEARCH + TOOL DROP */}
        <section id="research" className="two-col">
          <div>
            <div className="section-label">LLM Research</div>
            <div className="panel-headline">A New Framework Reveals Exactly Which Tokens Drive an LLM&apos;s Reasoning</div>
            <div className="panel-body">Researchers introduce the IAR framework, which identifies the specific tokens a model treats as reasoning-critical, then tracks how those tokens&apos; importance evolves layer by layer. Tested on Qwen-7B, Qwen-14B, and Llama-8B — this explains why a model can reason soundly on one problem type and fail on a structurally similar one with no warning.</div>
            <a className="panel-source-link" href="https://arxiv.org/abs/2605.28006" target="_blank">arXiv:2605.28006, May 27, 2026</a>
          </div>
          <div>
            <div className="section-label">Tool Drop</div>
            <div className="panel-headline">Harbor: One Command Spins Up Your Entire Local LLM Stack</div>
            <div className="panel-body">Harbor is an open-source CLI that pre-wires an entire local AI stack and starts it with a single command. It covers 16 chat frontends, 21 LLM backends (Ollama, llama.cpp, vLLM), and 90+ supporting services. Built for developers who keep bouncing off Docker complexity.</div>
            <a className="panel-source-link" href="https://github.com/av/harbor" target="_blank">github.com/av/harbor</a>
          </div>
        </section>

        <hr className="divider" />

        {/* MARKETS AND AI STOCKS */}
        <section id="stocks">
          <div className="section-label">Markets and AI Stocks</div>
          <div className="stock-row">
            <div className="stock-left">
              <div className="stock-badge bullish">Bullish</div>
              <div className="stock-ticker">NVDA</div>
              <div className="stock-ytd">+32% YTD</div>
            </div>
            <div>
              <div className="stock-body">Nvidia posted a record Q1: revenue up 85% year-over-year to $81.6B, data center revenue up 92% to $75.2B. Three concerns linger: top 3 customers now represent 64% of accounts receivable, $145B in inventory commitments, and China data center revenue dropped to zero from $4.6B a year ago.</div>
              <a className="stock-source" href="https://www.fool.com/investing/2026/05/27/nvidia-stock-has-struggled-over-the-last-week-here/" target="_blank">The Motley Fool, May 27, 2026</a>
            </div>
          </div>
          <div className="stock-row">
            <div className="stock-left">
              <div className="stock-badge bearish">Bearish</div>
              <div className="stock-ticker">MSFT</div>
              <div className="stock-ytd">-24% YTD</div>
            </div>
            <div>
              <div className="stock-body">Microsoft is the worst-performing large-cap AI name in 2026, down 24%. Morningstar puts fair value at $600 — roughly 30% above current price. The OpenAI early-mover advantage is eroding faster than Microsoft can monetize it.</div>
              <a className="stock-source" href="https://finance.yahoo.com/markets/stocks/articles/down-24-2026-buy-dip-144751100.html" target="_blank">Yahoo Finance, May 27, 2026</a>
            </div>
          </div>
          <div className="stock-row">
            <div className="stock-left">
              <div className="stock-badge watch">Watch</div>
              <div className="stock-ticker">PLTR</div>
              <div className="stock-ytd">-27% YTD</div>
            </div>
            <div>
              <div className="stock-body">Palantir has taken a sustained hit as the Anthropic competitive narrative pressured enterprise AI stocks. Wedbush maintains Outperform with a $230 target, citing Palantir&apos;s ontology layer as a switching-cost moat no general AI lab can easily replicate.</div>
              <a className="stock-source" href="https://finance.yahoo.com/markets/stocks/articles/ignore-anthropic-panic-keep-buying-205322975.html" target="_blank">Yahoo Finance, May 27, 2026</a>
            </div>
          </div>
          <div className="stock-row">
            <div className="stock-left">
              <div className="stock-badge rising">Rising</div>
              <div className="stock-ticker">AVGO</div>
              <div className="stock-ytd">+22% YTD</div>
            </div>
            <div>
              <div className="stock-body">Broadcom&apos;s Q1 2026 AI revenue more than doubled year-over-year to $8.4B, driven by custom silicon partnerships with hyperscalers. Susquehanna raised its price target to $490, maintaining a Positive rating.</div>
              <a className="stock-source" href="https://finance.yahoo.com/news/analysts-betting-broadcom-stock-2026-191611049.html" target="_blank">Yahoo Finance, May 27, 2026</a>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* PODCASTS */}
        <section id="podcasts">
          <div className="section-label">Podcasts and Videos Worth Your Time</div>
          <div className="podcast-grid">
            <div className="podcast-card">
              <div className="podcast-show">Latent Space &nbsp;&middot;&nbsp; AI Engineer Podcast &nbsp;&middot;&nbsp; 1 hr 8 min</div>
              <div className="podcast-title">The Age of Async Agents &mdash; Cognition &amp; OpenInspect</div>
              <div className="podcast-body">Two builders on background agent infrastructure: what it takes to make agents run reliably across long-horizon tasks without a human in the loop. Covers memory architecture, agent-level testing, and multi-agent coordination dynamics that standard evals miss.</div>
              <a className="podcast-link" href="https://podcasts.apple.com/us/podcast/latent-space-the-ai-engineer-podcast/id1674008350" target="_blank">Apple Podcasts &mdash; Latent Space</a>
            </div>
            <div className="podcast-card">
              <div className="podcast-show">Hard Fork (NYT) &nbsp;&middot;&nbsp; Weekly &nbsp;&middot;&nbsp; 55 min</div>
              <div className="podcast-title">Field Trip to Google I/O + Sit-Down With Sundar Pichai</div>
              <div className="podcast-body">Kevin Roose and Casey Newton at Google I/O with an on-the-record conversation with Sundar Pichai about Gemini, the Search redesign, and Google&apos;s internal AI culture. Covers what it is actually like to cover the AI beat right now.</div>
              <a className="podcast-link" href="https://podcasts.apple.com/us/podcast/hard-fork/id1528594034" target="_blank">Apple Podcasts &mdash; Hard Fork</a>
            </div>
            <div className="podcast-card">
              <div className="podcast-show">Lex Fridman Podcast &nbsp;&middot;&nbsp; Ep. 496 &nbsp;&middot;&nbsp; 4 hr 24 min</div>
              <div className="podcast-title">FFmpeg: The Incredible Technology Behind Video on the Internet</div>
              <div className="podcast-body">Deep dive with the creator of FFmpeg &mdash; the open-source framework that processes essentially every video file on the internet. Covers codecs, the famously hostile CLI, and maintaining critical global infrastructure as open-source for three decades.</div>
              <a className="podcast-link" href="https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584" target="_blank">Apple Podcasts &mdash; Lex Fridman</a>
            </div>
            <div className="podcast-card">
              <div className="podcast-show">Latent Space &nbsp;&middot;&nbsp; AI Engineer Podcast &nbsp;&middot;&nbsp; 1 hr 10 min</div>
              <div className="podcast-title">Giving Agents Computers &mdash; Ivan Burazin, Daytona</div>
              <div className="podcast-body">Ivan Burazin built Daytona, the sandboxed cloud compute provider Anthropic now lists as an official managed option for Claude&apos;s agent sandboxes. Covers why secure, disposable compute is the hardest infrastructure problem in agentic AI.</div>
              <a className="podcast-link" href="https://podcasts.apple.com/us/podcast/latent-space-the-ai-engineer-podcast/id1674008350" target="_blank">Apple Podcasts &mdash; Latent Space</a>
            </div>
          </div>
        </section>

        <hr className="divider-thick" />

        {/* QUICK SHOTS */}
        <section id="quickshots">
          <div className="section-label">Quick Shots &mdash; New Products and Tools</div>
          <div className="qs-grid">
            <div className="qs-card">
              <div className="qs-arrow">-&gt;</div>
              <div className="qs-body"><strong>Project Glasswing:</strong> Anthropic&apos;s Mythos AI scanned 1,000+ open-source projects, flagging 6,202 high/critical vulnerabilities — 90%+ confirmed as true positives by independent security firms.</div>
              <div className="qs-source"><a className="qs-source-link" href="https://www.anthropic.com/research/glasswing-initial-update" target="_blank">&mdash; Anthropic, May 22, 2026</a></div>
            </div>
            <div className="qs-card">
              <div className="qs-arrow">-&gt;</div>
              <div className="qs-body"><strong>Gemini 3.5 Flash</strong> is now the default model in Google AI Mode for all users globally across 200+ countries, replacing earlier preview models as part of the I/O 2026 Search overhaul.</div>
              <div className="qs-source"><a className="qs-source-link" href="https://blog.google/products-and-platforms/products/search/search-io-2026/" target="_blank">&mdash; Google Blog, May 19, 2026</a></div>
            </div>
            <div className="qs-card">
              <div className="qs-arrow">-&gt;</div>
              <div className="qs-body"><strong>Gemini Spark</strong> is Google&apos;s 24/7 personal AI agent for $100/month Ultra subscribers. Monitors Gmail, Sheets, Docs, Drive, and Calendar — proposes actions and requests approval before anything irreversible.</div>
              <div className="qs-source"><a className="qs-source-link" href="https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/" target="_blank">&mdash; Google Blog, May 19, 2026</a></div>
            </div>
            <div className="qs-card">
              <div className="qs-arrow">-&gt;</div>
              <div className="qs-body"><strong>EY and Microsoft</strong> launched a $1B, five-year initiative to embed EY consultants alongside Microsoft engineers building AI tools for finance, tax, risk, HR, and supply chain.</div>
              <div className="qs-source"><a className="qs-source-link" href="https://news.microsoft.com/source/2026/05/21/ey-and-microsoft-announce-global-initiative/" target="_blank">&mdash; Microsoft Newsroom, May 21, 2026</a></div>
            </div>
            <div className="qs-card">
              <div className="qs-arrow">-&gt;</div>
              <div className="qs-body"><strong>Claude Managed Agents</strong> adds self-hosted sandboxes (public beta) so agent tool execution stays on your infrastructure, plus MCP tunnels for encrypted connections to private MCP servers with no firewall changes.</div>
              <div className="qs-source"><a className="qs-source-link" href="https://claude.com/blog/claude-managed-agents-updates" target="_blank">&mdash; Anthropic, May 19, 2026</a></div>
            </div>
            <div className="qs-card">
              <div className="qs-arrow">-&gt;</div>
              <div className="qs-body"><strong>Claude Code v2.1.152</strong> ships with a per-category /usage breakdown, keyboard-navigable diff viewing, and GitHub Flavored Markdown task list rendering in responses.</div>
              <div className="qs-source"><a className="qs-source-link" href="#" target="_blank">&mdash; Anthropic, May 27, 2026</a></div>
            </div>
          </div>
        </section>

      </main>

      {/* SUBSCRIBE */}
      <div className="sub-band">
        <div className="sub-inner">
          <div>
            <div className="sub-kicker">Get every issue</div>
            <div className="sub-headline">
              This lands in your inbox<br />every Monday and Friday.
            </div>
          </div>
          <div>
            <BeehiivEmbed />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">The Signal</div>
        <div className="footer-meta">
          What matters in AI<br />
          &copy; {year} &nbsp;&middot;&nbsp; Mon &amp; Fri
        </div>
      </footer>
    </>
  )
}
