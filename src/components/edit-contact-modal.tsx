import * as Dialog from "@radix-ui/react-dialog";
import { Pen, X } from "lucide-react";

interface EditContactModaluser {
  user: {
    name: string;
    profession: string;
    email: string;
  };
}

function EditContactModal({ user }: EditContactModaluser) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="p-2 bg-transparent hover:bg-slate-200 rounded-md">
          <Pen size={16} className="text-zinc-600" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
        <Dialog.Content className="fixed flex flex-col gap-4 w-96 rounded-md left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 p-8 bg-white data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]">
          <div className="flex justify-between items-center">
            <Dialog.Title className="text-xl">Editar contato</Dialog.Title>
            <Dialog.Close>
              <button className="p-2 bg-transparent hover:bg-slate-200 rounded-md">
                <X className="text-zinc-600" size={22} />
              </button>
            </Dialog.Close>
          </div>
          <form className="gap-4 flex flex-col">
            <label className="flex text-md font-semibold text-zinc-800 gap-3 flex-col">
              Nome
              <input
                type="text"
                defaultValue={user.name}
                placeholder="Your name"
                className="outline-none hover:border-zinc-500 font-normal text-md focus:border-blue-400 border rounded-md px-3 py-1 border-zinc-400"
              />
            </label>
            <label className="flex text-md font-semibold text-zinc-800 gap-3 flex-col">
              Profession
              <input
                type="text"
                defaultValue={user.profession}
                placeholder="Your profession"
                className="outline-none hover:border-zinc-500 font-normal text-md focus:border-blue-400 border rounded-md px-3 py-1 border-zinc-400"
              />
            </label>
            <label className="flex text-md font-semibold text-zinc-800 gap-3 flex-col">
              Email
              <input
                type="text"
                defaultValue={user.email}
                placeholder="Your email"
                className="outline-none hover:border-zinc-500 font-normal text-md focus:border-blue-400 border rounded-md px-3 py-1 border-zinc-400"
              />
            </label>
          </form>
          <div className="justify-end mt-4 flex gap-4">
            <Dialog.Close>
              <button className="px-4 py-2 bg-white rounded-md hover:bg-zinc-200 text-zinc-800">
                Cancel
              </button>
            </Dialog.Close>
            <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 text-white">
              Save
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default EditContactModal;
