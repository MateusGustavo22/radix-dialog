import * as Dialog from "@radix-ui/react-dialog";
import { Pen, X } from "lucide-react";
import Button from "./Button";
import { DialogOverlay } from "./dialog-overlay";
import DialogContent from "./dialog-content";

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
        <DialogOverlay />
        <DialogContent className="w-96">
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
          <div className="justify-end mt-4 flex gap-4 ">
            <Dialog.Close>
              <Button variant="cancel">Cancel</Button>
            </Dialog.Close>
            <Button>Save</Button>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default EditContactModal;
