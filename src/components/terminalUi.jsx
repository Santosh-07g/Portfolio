// Small presentational pieces used in terminal output.

export const A = ({ href, children }) => (
  <a
    href={href}
    {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
    className="inline-block py-1.5 pointer-coarse:py-3 text-blue underline decoration-dotted underline-offset-2 hover:text-purple"
  >
    {children}
  </a>
)

export const Accent = ({ children }) => <span className="text-purple">{children}</span>
export const Muted = ({ children }) => <span className="text-gray-400">{children}</span>
export const Ok = ({ children }) => <span className="text-green-400">{children}</span>
export const Err = ({ children }) => <span className="text-red-400">{children}</span>
export const Block = ({ children }) => <div className="whitespace-pre-wrap break-words">{children}</div>
