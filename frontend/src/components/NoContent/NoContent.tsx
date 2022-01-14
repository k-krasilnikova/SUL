import React from 'react';

import { NO_CONTENT } from 'constants/messages';

import { Message, MessageWrapper } from './styled';

interface NoContentProps {
  message?: string;
}

const NoContent: React.FC<NoContentProps> = ({ message }) => (
  <MessageWrapper>
    <Message>{message || NO_CONTENT}</Message>
  </MessageWrapper>
);

export default NoContent;
