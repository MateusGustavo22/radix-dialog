import EditContactModal from "./edit-contact-modal";

interface ContactCardProps {
  user: {
    name: string;
    profession: string;
    email: string;
  };
}

export default function ContactCard({ user }: ContactCardProps) {
  return (
    <div className="bg-white px-4 py-4 rounded-md shadow-md">
      <div className="flex flex-col w-96">
        <div className="flex justify-between">
          <span className="text-lg">{user.name}</span>
          <EditContactModal user={user} />
        </div>
        <span className="text-zinc-600 ">{user.name}</span>
        <span className="text-zinc-600 ">{user.email}</span>
      </div>
    </div>
  );
}
