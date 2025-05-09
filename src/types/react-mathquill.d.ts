declare module 'react-mathquill' {
  import { FC } from 'react';

  interface MathQuillConfig {
    spaceBehavesLikeTab?: boolean;
    leftRightIntoCmdGoes?: string;
    restrictMismatchedBrackets?: boolean;
    autoCommands?: string;
    autoOperatorNames?: string;
  }

  interface EditableMathFieldProps {
    latex?: string;
    onChange?: (mathField: any) => void;
    config?: MathQuillConfig;
    [key: string]: any;
  }

  export const EditableMathField: FC<EditableMathFieldProps>;
  export const StaticMathField: FC<{ latex: string }>;
  export const addStyles: () => void;
}