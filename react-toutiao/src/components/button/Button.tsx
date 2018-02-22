import * as React from 'react';
import './button.css';

export interface Props {
  content: string;
}

class Button extends React.Component<Props, object> {
  render() {
    const { content } = this.props;
    return (
      <div className="Button">
        <p>{content}</p>
      </div>
    );
  }
}

export default Button;
