import { Bot, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  title: string;
  subtitle: string;
}

const WelcomeScreen = ({ title, subtitle }: WelcomeScreenProps) => {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center space-y-4 max-w-md">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-6">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground tracking-tight">{title}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
