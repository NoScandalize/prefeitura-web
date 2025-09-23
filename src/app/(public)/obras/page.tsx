import { Components } from "@/components";

// Obra Exemplo
const ament = {
  img: 'https://raw.githubusercontent.com/NoScandalize/prefeitura-img/cd72c8819e0a85c91f1211b3a3ea6b0e07092a7b/rf0001-ament/rfd019-ament-03-09-25/ament-03-09-25-img016.jpg',
  title: "Centro Especializado em Atenção à Saúde Mental - AMENT",
  number: '00004/2024',
  modality: 'Concorrência (Lei Nº 14.133/2021)',
  value: 'R$ 1.150.000,00',
  address: 'Rua Maria Farias de Assis, SN, Próximo ao cartório.',
  status: 'InProgress'
}

const crecheDNOCS = {
  img: 'https://github.com/NoScandalize/prefeitura-img/blob/main/rf0002-creche-dnocs/rfd029-creche-dnocs-28-08-25/creche-dnocs-28-08-25-img001.jpeg?raw=true',
  title: "Creche com capacidade para 50 crianças - DNOCS",
  number: '40001/2023',
  modality: 'Tomada de Preços (Lei Nº 8.666/1993)',
  value: 'R$ 912.926,02',
  address: 'Rua Maria Francisca da Silva.',
  status: 'InProgress'
}
  
const obrasArray = [ament, crecheDNOCS]

export default function Obras() {
  return (
    <Components.Layout.Main pageTitle="Obras">
      <Components.UI.Projects.Root>
        {obrasArray.map((obra) => (
            <Components.UI.Projects.Card status='InProgress' data={obra} img={obra.img} key={obra.number} />
        ))}
      </Components.UI.Projects.Root>
    </Components.Layout.Main>
  );
}
