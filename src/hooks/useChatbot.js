import { useChat } from '../context/ChatContext';

const WELDER_PHONE = '254705455409';

export const useChatbot = () => {
    const { addMessage } = useChat();

    const getBotReply = (msg) => {
        const input = msg.toLowerCase();

        if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
            return "Pricing depends on project details like materials, complexity, and timeline. For a custom quote, please share your project requirements.";
        }
        if (input.includes('certif') || input.includes('qualified')) {
            return "I am AWS D1.1 certified and OSHA safety trained with over 10 years of experience in industrial and residential welding.";
        }
        if (input.includes('mobile') || input.includes('on-site') || input.includes('travel')) {
            return "Yes, I offer mobile/on-site welding services with all necessary equipment. I serve Nairobi and surrounding areas.";
        }
        if (input.includes('contact') || input.includes('reach') || input.includes('number')) {
            return "You can reach me via WhatsApp at +254705455409, phone call, or email at staramisiengineering@gmail.com.";
        }
        if (input.includes('timeline') || input.includes('how long') || input.includes('time')) {
            return "Project timelines vary: Small repairs (1-2 days), Custom fabrication (3-7 days), Large projects (1-2 weeks).";
        }
        if (input.includes('payment') || input.includes('pay') || input.includes('deposit')) {
            return "For most projects, I require a 40% upfront deposit with the balance upon completion. I accept mobile money, bank transfer, or cash.";
        }

        // Escalation logic for complex messages
        if (input.length > 100 || input.includes('complex') || input.includes('specific') || input.includes('quote')) {
            const whatsappLink = `https://wa.me/${WELDER_PHONE}?text=${encodeURIComponent("Hi Engineer Owino, I have a specific project inquiry: " + msg)}`;
            return `This sounds like a detailed project. For the most accurate advice, I suggest chatting directly with me on WhatsApp: ${whatsappLink}`;
        }

        return "I'm here to help with your welding and metal fabrication needs! You can ask me about services, pricing, materials, or timelines.";
    };

    const sendMessage = (text) => {
        addMessage(text, 'You', 'right');

        setTimeout(() => {
            const reply = getBotReply(text);
            addMessage(reply, 'Engineer Owino', 'left');
        }, 1000);
    };

    return { sendMessage };
};
