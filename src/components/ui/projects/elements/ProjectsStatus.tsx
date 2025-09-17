export interface ProjectsStatusProps {
    text: string
    color: 'green' | 'yellow' | 'red' | 'blue' | 'white'
    animate?: 'ping' | 'pulse' | 'spin' | 'bounce'
    icon?: string
}

export function ProjectsStatus({ text, color, animate, icon }: ProjectsStatusProps) {
    return (
        <div className="p-4  flex justify-center">
            {color === 'green' && (
            <div className="border rounded-md pl-1.5 pr-1.5 flex text-green-400 border-green-400">
                {icon ? (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>{icon}</span>) : (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>•</span>)}
                <h1>{text}</h1>
            </div>
            )}
            {color === 'yellow' && (
            <div className="border rounded-md pl-1.5 pr-1.5 flex text-yellow-400 border-yellow-400">
                {icon ? (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>{icon}</span>) : (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>•</span>)}
                <h1>{text}</h1>
            </div>
            )}
            {color === 'red' && (
            <div className="border rounded-md pl-1.5 pr-1.5 flex text-red-600 border-red-600">
                {icon ? (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>{icon}</span>) : (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>•</span>)}
                <h1>{text}</h1>
            </div>
            )}
            {color === 'blue' && (
            <div className="border rounded-md pl-1.5 pr-1.5 flex text-blue-700 border-blue-700">
                {icon ? (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>{icon}</span>) : (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>•</span>)}
                <h1>{text}</h1>
            </div>
            )}
            {color === 'white' && (
            <div className="border rounded-md pl-1.5 pr-1.5 flex">
                {icon ? (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>{icon}</span>) : (
                <span className={`pl-1.5 pr-1.5 animate-${animate}`}>•</span>)}
                <h1>{text}</h1>
            </div>
            )}
        </div>
    )
}