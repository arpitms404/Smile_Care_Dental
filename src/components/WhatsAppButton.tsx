
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+919792563097";
  
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button 
          className="whatsapp-button"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-white rounded-lg shadow-lg p-3">
        <div className="mb-3 pb-2 border-b">
          <p className="font-medium text-gray-800">Chat with us on WhatsApp</p>
          <p className="text-sm text-gray-500">We typically reply within minutes</p>
        </div>
        <DropdownMenuItem 
          className="cursor-pointer py-2 hover:bg-[#25D366]/10 focus:bg-[#25D366]/10 rounded-md"
          onClick={() => openWhatsApp("Hello, I'd like to schedule an appointment.")}
        >
          Book an Appointment
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer py-2 hover:bg-[#25D366]/10 focus:bg-[#25D366]/10 rounded-md"
          onClick={() => openWhatsApp("Hello, I have a question about your dental services.")}
        >
          Ask a Question
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer py-2 hover:bg-[#25D366]/10 focus:bg-[#25D366]/10 rounded-md"
          onClick={() => openWhatsApp("Hello, I'd like to inquire about pricing for your dental services.")}
        >
          Get Price Information
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer py-2 hover:bg-[#25D366]/10 focus:bg-[#25D366]/10 rounded-md"
          onClick={() => openWhatsApp("Hello, I have a dental emergency and need immediate assistance.")}
        >
          Dental Emergency
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WhatsAppButton;
