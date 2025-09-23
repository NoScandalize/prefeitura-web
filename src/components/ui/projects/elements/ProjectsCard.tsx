import { Components } from "@/components"
import { ProjectsStatusProps } from './ProjectsStatus'

interface ProjectsCardProps {
    status: 'Completed' | 'InProgress' | 'Paralyzed',
    img: string,
    data: ProjectData
    className?: string
}

type ProjectData = {
    title: string
    number: string,
    modality: string,
    value: string,
    address: string
}

type Status<T> = {
    Completed: T,
    InProgress: T,
    Paralyzed: T
}

export const ProgressStatus: Status<ProjectsStatusProps> = {
    Completed: {
        text: 'Concluída',
        color: 'green',
        animate: 'pulse'
    },
    InProgress: {
        text: 'Em Progresso',
        color: 'yellow',
        animate: 'ping'
    },
    Paralyzed: {
        text: 'Paralizada',
        color: 'red',
        animate: 'pulse'
    }
}

export function ProjectsCard({ status, img, data, className }: ProjectsCardProps) {
    return (
            <div className={`flex border rounded-2xl border-zinc-700 w-auto mt-3 ${className}`}>
                <div>
                    <img className="w-72 m-5 border rounded-2xl border-zinc-600" src={img} alt="Imagem da obra" />
                    <div className="p-4  flex justify-center">
                    <Components.UI.Projects.Status text={ProgressStatus[status].text} color={ProgressStatus[status].color} animate={ProgressStatus[status].animate} icon={ProgressStatus[status].icon} />   
                    </div>
                </div>
                <div className="w-full pt-3 pl-11">
                    <h1 className="text-2xl pb-2.5">{data.title}</h1>
                    <p>Número: {data.number}</p>
                    <p>Modalidade: {data.modality}</p>
                    <p>Valor: {data.value}</p>
                    <p>Endereço: {data.address}</p>
                </div>
            </div>
    )
}