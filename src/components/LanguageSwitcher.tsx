import { useLanguage } from '@/contexts/LanguageContext';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const FlagPL = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="h-4 w-6 rounded-sm object-cover">
            <g fillRule="evenodd">
                <path fill="#fff" d="M640 480H0V0h640z" />
                <path fill="#dc143c" d="M640 480H0V240h640z" />
            </g>
        </svg>
    );

    const FlagGB = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="h-4 w-6 rounded-sm object-cover">
            <path fill="#012169" d="M0 0h640v480H0z" />
            <path fill="#FFF" d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
            <path fill="#C8102E" d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
            <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
            <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
        </svg>
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 gap-1 px-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full">
                    {language === 'pl' ? <FlagPL /> : <FlagGB />}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('pl')} className="gap-2 cursor-pointer">
                    <FlagPL />
                    <span className={language === 'pl' ? 'font-bold' : ''}>Polski</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} className="gap-2 cursor-pointer">
                    <FlagGB />
                    <span className={language === 'en' ? 'font-bold' : ''}>English</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
