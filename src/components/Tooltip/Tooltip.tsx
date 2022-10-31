import React, { ReactElement, ReactNode } from 'react';
import { Box, Image, Tooltip as ChakraTooltip } from '@chakra-ui/react';
import { TooltipProps } from './Tooltip.types';

export default function Tooltip({
  message,
  ...options
}: TooltipProps): ReactElement {
  return (
    <Box>
      <ChakraTooltip
        label={message}
        padding="3"
        hasArrow
        bg="white"
        maxWidth="300px"
        fontSize="sm"
        boxShadow="0px 1px 9.5px #ccc"
        placement="top"
        {...options}
      >
        <Image
          marginLeft="2"
          src="/lander/images/information-icon.svg"
          alt="tooltip"
          width="16px"
        />
      </ChakraTooltip>
    </Box>
  );
}