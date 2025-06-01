import React from 'react';
import { Github, Linkedin, Mail, Twitter, Zap, Terminal, Code } from 'lucide-react';

interface SocialIconProps {
  iconName: string;
  className?: string;
  size?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ iconName, className = '', size = 20 }) => {
  switch (iconName.toLowerCase()) {
    case 'github':
      return <Github size={size} className={className} />;
    case 'linkedin':
      return <Linkedin size={size} className={className} />;
    case 'twitter':
      return <Twitter size={size} className={className} />;
    case 'mail':
      return <Mail size={size} className={className} />;
    case 'zap':
      return <Zap size={size} className={className} />;
    case 'terminal':
      return <Terminal size={size} className={className} />;
    case 'code':
      return <Code size={size} className={className} />;
    default:
      return null;
  }
};

export default SocialIcon;
