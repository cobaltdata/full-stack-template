// ../../../components/browserGuide.js
import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Code,
  Icon,
  Flex,
  Alert,
  AlertIcon,
  Divider,
} from "@chakra-ui/react";
import {
  FiCheckCircle,
  FiCopy,
  FiGlobe,
  FiCode,
  FiSettings,
  FiServer,
  FiList,
} from "react-icons/fi";

const CenterStarted = () => {
  const steps = [
    {
      title: "List Available Endpoints",
      icon: FiList,
      description: "Retrieve all available Browser proxy endpoints.",
      content: (
        <Code p={3} borderRadius="md" fontSize="sm" bg="gray.700">
          {`curl -X GET https://api.thedataproxy.com/api/v1/endpoints?type=Browser`}
        </Code>
      ),
    },
    {
      title: "Get Available Locations",
      icon: FiGlobe,
      description: "Retrieve a list of supported locations for Browser proxies.",
      content: (
        <Code p={3} borderRadius="md" fontSize="sm" bg="gray.700">
          {`curl -X GET https://api.thedataproxy.com/api/v1/locations?type=Browser`}
        </Code>
      ),
    },
    {
      title: "Configure Your Endpoint",
      icon: FiGlobe,
      description: "Connect to our Browser proxy network using this endpoint.",
      content: (
        <Code p={3} borderRadius="md" fontSize="sm" bg="gray.700">
          https://api.thedataproxy.com/api/v1/proxy/browser/
        </Code>
      ),
    },
    {
      title: "Set Your Authentication",
      icon: FiCode,
      description: "Use your credentials to authenticate requests.",
      content: (
        <Box bg="gray.700" p={3} borderRadius="md">
          <Code display="block" mb={2}>
            Username: your_username<br />
            Password: your_password
          </Code>
          <Button leftIcon={<FiCopy />} variant="link" size="sm" colorScheme="blue">
            Copy credentials
          </Button>
        </Box>
      ),
    },
    {
      title: "Retrieve Authentication Info",
      icon: FiCode,
      description: "Check your authentication details and status.",
      content: (
        <Code p={3} borderRadius="md" fontSize="sm" bg="gray.700">
          {`curl -X GET https://api.thedataproxy.com/api/v1/auth/browser`}
        </Code>
      ),
    },
    {
      title: "Optimize Your Settings",
      icon: FiSettings,
      description: "Adjust request headers and connection settings for better performance and security.",
      content: (
        <Code p={3} borderRadius="md" fontSize="sm" bg="gray.700">
          {`headers = {'User-Agent': 'YourApp/1.0', 'X-Proxy-Type': 'Browser'}`}
        </Code>
      ),
    },
    {
      title: "Send Your First Request",
      icon: FiServer,
      description: "Use the correct proxy format in your code to start making requests.",
      content: (
        <Code p={3} borderRadius="md" fontSize="sm" bg="gray.700">
          {`curl --proxy-user username:password -x api.thedataproxy.com/api/v1/proxy/browser/ https://api.mywebsite.com`}
        </Code>
      ),
    },
    {
      title: "Monitor and Scale",
      icon: FiSettings,
      description: "Track usage statistics and scale your requests based on your needs.",
      content: (
        <Code p={3} borderRadius="md" fontSize="sm" bg="gray.700">
          {`curl -X GET https://api.thedataproxy.com/api/v1/usage/browser/`}
        </Code>
      ),
    },
  ];

  return (
        <Box maxW="100%" mx="auto" px={{ base: 6, md: 12 }} py={12}>
          <VStack spacing={8} align="stretch">
            {/* Quick Start Guide Header */}


        {/* Step-by-Step Guide */}
        <VStack spacing={6} align="stretch">
          {steps.map((step, index) => (
            <Flex key={index} gap={4} align="flex-start">
              <Flex align="center" justify="center" w="50px" h="50px" borderRadius="full" bg="blue.100">
                <Icon as={step.icon} boxSize={6} color="blue.500" />
              </Flex>
              <Box flex={1}>
                <Heading size="md" fontWeight="semibold" mb={1}>
                  {step.title}
                </Heading>
                <Text color="gray.600" mb={2}>
                  {step.description}
                </Text>
                {step.content}
              </Box>
            </Flex>
          ))}
        </VStack>

        <Divider />

        {/* Verification & Support */}
        <Alert status="success" borderRadius="md">
          <AlertIcon as={FiCheckCircle} boxSize={5} />
          <Box>
            <Text fontWeight="bold">Verify Your Setup</Text>
            <Text fontSize="sm">
              Test your connection using the examples above. If your IP is masked and geolocation matches expectations, you're all set!
              Need help? Visit our{" "}
              <Button variant="link" colorScheme="blue" size="sm">
                troubleshooting guide
              </Button>{" "}
              or contact support.
            </Text>
          </Box>
        </Alert>
      </VStack>
    </Box>
  );
};

export default CenterStarted;
