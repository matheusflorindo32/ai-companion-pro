import { useState, useRef, useEffect } from 'react';
import { SendHorizontal } from 'lucide-react';

interface InputBoxProps {
  placeholder: string;
  sendLabel: string;
  onSend: (message: string) => void;
  disabled?: boolean;
}

const InputBox = ({ placeholder, sendLabel, onSend, disabled }: InputBoxProps) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  }, [value]);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-border bg-card/80 backdrop-blur-sm p-4">
      <div className="max-w-3xl mx-auto flex items-end gap-3 bg-secondary rounded-2xl border border-border px-4 py-3 focus-within:ring-2 focus-within:ring-ring transition-shadow">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none min-h-[24px] max-h-[150px]"
        />
        <button
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          aria-label={sendLabel}
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        >
          <SendHorizontal className="h-4 w-4" />
        </button>
      </div>
      <p className="text-[11px] text-muted-foreground text-center mt-2 select-none">
        NexusAI pode cometer erros. Verifique informações importantes.
      </p>
    </div>
  );
};

export default InputBox;
