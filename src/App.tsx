import ContactCard from "./components/contact-card";

function App() {
  return (
    <div className="w-max bg-slate-300 gap-4 flex flex-col p-4 m-auto">
      {contacts.map((contact) => (
        <ContactCard user={contact} />
      ))}
    </div>
  );
}

export default App;

const contacts = [
  {
    name: "Maria Santos",
    profession: "Médica",
    email: "maria.santos@email.com",
  },
  { name: "Pedro Lima", profession: "Advogado", email: "pedro.lima@email.com" },
  {
    name: "Fernanda Costa",
    profession: "Arquiteta",
    email: "fernanda.costa@email.com",
  },
  {
    name: "Ricardo Oliveira",
    profession: "Professor",
    email: "ricardo.oliveira@email.com",
  },
  {
    name: "Camila Silva",
    profession: "Jornalista",
    email: "camila.silva@email.com",
  },
  {
    name: "Felipe Sousa",
    profession: "Engenheiro de Software",
    email: "felipe.sousa@email.com",
  },
  {
    name: "Laura Mendes",
    profession: "Psicóloga",
    email: "laura.mendes@email.com",
  },
  {
    name: "Alexandre Santos",
    profession: "Designer Gráfico",
    email: "alexandre.santos@email.com",
  },
  {
    name: "Isabela Costa",
    profession: "Contadora",
    email: "isabela.costa@email.com",
  },
  {
    name: "Gabriel Oliveira",
    profession: "Estudante",
    email: "gabriel.oliveira@email.com",
  },
];
