import React, { PropsWithChildren, ReactElement, useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import Tooltip from '../Tooltip';
import { FormFieldWrapperProps } from './FormFieldWrapper.types';

export default function FormFieldWrapper({
  children,
  error,
  isRequired,
  label,
  name,
  tooltipMessage,
  secondaryLabel,
  helper,
  ...rest
}: PropsWithChildren<FormFieldWrapperProps>): ReactElement {
  const isError = Boolean(error);

  return (
    <FormControl {...rest} isInvalid={isError} isRequired={isRequired}>
      <Flex>
        <FormLabel
          color="inherit"
          fontSize="xs"
          fontWeight="medium"
          htmlFor={name}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {label}
        </FormLabel>
        {secondaryLabel && (
          <Text fontSize="xs" color="gray.500" fontWeight="semibold">
            {' '}
            - {secondaryLabel}
          </Text>
        )}
        {tooltipMessage && <Tooltip message={tooltipMessage} marginLeft="3" />}
      </Flex>
      {children}
      {isError ? (
        <FormErrorMessage color="red.500" fontSize={{ base: 'xs', lg: 'xxs' }}>
          {error}
        </FormErrorMessage>
      ) : (
        <Box minHeight="17px" data-testid="form-field-error-placeholder">
          <Text fontSize="xs">{helper}</Text>
        </Box>
      )}
    </FormControl>
  );
}
