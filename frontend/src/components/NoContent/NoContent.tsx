import React from 'react';

import { NO_CONTENT } from 'constants/messages';

import { Message, MessageWrapper } from './styled';

interface NoContentProps {
  message?: string;
  size?: string;
}

const NoContent: React.FC<NoContentProps> = ({ message, size }) => (
  <MessageWrapper>
    <Message size={size}>{message || NO_CONTENT}</Message>
  </MessageWrapper>
);

export default NoContent;
