/*
 * Conteúdo do site em um só lugar.
 * Itens marcados como "a confirmar" devem ser trocados pelos dados reais do consultório.
 */

export const site = {
  name: 'Dra. Marinna Moreira',
  tagline: 'Consultório odontológico',
  // a confirmar — endereço
  address: {
    street: 'Endereço a confirmar',
    district: 'Cidade a confirmar',
  },
  phone: { display: '(31) 98374-6272', href: 'tel:+5531983746272' },
  whatsapp: { display: '(31) 98374-6272', number: '5531983746272' },
  // a confirmar — horários
  hours: [
    { days: 'Dias a confirmar', time: 'Horário a confirmar' },
  ],
}

export const whatsappLink = (text = 'Olá, Dra. Marinna! Quero agendar uma consulta.') =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`

export const navLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'tratamentos', label: 'Tratamentos' },
  { id: 'como-agendar', label: 'Como agendar' },
  { id: 'avaliacoes', label: 'Avaliações' },
]

// Lista de exemplo: trocar pelos tratamentos que a doutora realmente oferece
export const treatments = [
  { title: 'Consulta e avaliação', text: 'Exame completo, orientação e um plano de tratamento explicado em linguagem simples.' },
  { title: 'Limpeza e prevenção', text: 'Profilaxia e orientação de higiene para manter a saúde bucal em dia.' },
  { title: 'Clareamento dental', text: 'Opções para um sorriso mais claro, com indicação feita após avaliação.' },
  { title: 'Restaurações', text: 'Tratamento de cáries e recuperação estética e funcional dos dentes.' },
  { title: 'Tratamento de canal', text: 'Alívio da dor e preservação do dente, com atendimento cuidadoso.' },
  { title: 'Odontologia estética', text: 'Facetas, lentes e harmonização do sorriso conforme a necessidade de cada paciente.' },
]

export const steps = [
  { title: 'Chame no WhatsApp', text: 'Envie uma mensagem dizendo o que você precisa. A equipe responde no mesmo dia.' },
  { title: 'Escolha o horário', text: 'Veja as datas disponíveis e escolha a que cabe na sua rotina.' },
  { title: 'Venha tranquilo', text: 'Na consulta, a doutora explica cada etapa antes de começar qualquer procedimento.' },
]
