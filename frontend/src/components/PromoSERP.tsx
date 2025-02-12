import React from 'react';
import {
  Box,
  Button,
  Text,
  Heading,
  Grid,
  GridItem,
  Flex,
  Icon,
  Badge,
  List,
  ListItem,
  ListIcon,
  Alert,
  AlertIcon,
  VStack
} from "@chakra-ui/react";
import { Link, useNavigate } from '@tanstack/react-router';
import { FiCheckCircle, FiSearch, FiCode, FiFilter, FiClock } from 'react-icons/fi';

const features = [
  { name: "Real-time search results", icon: FiSearch, description: "Instant access to structured search results from multiple sources." },
  { name: "JSON structured data", icon: FiCode, description: "Get results in a structured JSON format for easy integration." },
  { name: "Custom query parameters", icon: FiFilter, description: "Refine your search with powerful filtering and query options." },
  { name: "Fast and reliable response times", icon: FiClock, description: "Optimized performance for rapid search processing." }
];

const pricingPlans = [
  {
    name: "On-Demand",
    price: "$100",
    features: ["100 requests/month", "Basic API access", "Email support"],
    borderColor: "blue.700",
    buttonVariant: "outline",
  },
  {
    name: "Reserved",
    price: "$500",
    features: ["1,000 requests/month", "Faster response times", "Priority support"],
    borderColor: "blue.600",
    buttonVariant: "solid",
    badge: "MOST POPULAR",
  },
  {
    name: "Spot",
    price: "$2,000",
    features: ["1,000,000 requests/month", "Enterprise-grade performance", "Dedicated support"],
    borderColor: "blue.500",
    buttonVariant: "solid",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited requests", "Dedicated account manager", "Custom integrations"],
    borderColor: "blue.400",
    buttonVariant: "outline",
  }
];

const PromoSERP: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box maxW="100%" mx="auto" px={{ base: 6, md: 12 }} py={10} bg="gray.800">
      <VStack spacing={6} align="stretch">
        <Alert status="info" borderRadius="md" bg="gray.700" color="gray.300">
          <AlertIcon color="blue.500" />
          <Text fontSize="sm">Our Search API is optimized for high-speed querying and structured data retrieval.</Text>
        </Alert>

        <Box w="100%" py={6} bg="gray.700" borderRadius="md" boxShadow="lg" px={6}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Box>
              <Heading as="h1" size="lg" fontWeight="bold" color="gray.100">
                Unlock Search API
              </Heading>
              <Text fontSize="sm" color="gray.400" mt={1}>
                Access structured and real-time search data with flexible API integration.
              </Text>
            </Box>
            <Box bg="blue.800" color="gray.300" borderRadius="md" p={5} boxShadow="lg" textAlign="left" display="flex" flexDirection="column" justifyContent="center">
              <Heading as="h2" size="md" fontWeight="light" color="gray.100">
                Start Your Free Trial Today!
              </Heading>
              <Text fontSize="xs" my={2} color="gray.300">
                Get full access to our Search API with a 7-day free trial. No credit card required!
              </Text>
                            <Link to="/proxies/pricing">
              <Button bg="blue.600" color="gray.100" _hover={{ bg: "blue.500" }} variant="solid">
                Sign Up for Free
              </Button></Link>
            </Box>
          </Grid>
        </Box>
        <Box bg="gray.700" py={10} px={6} borderRadius="md" boxShadow="lg">
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6} mt={6}>
            {features.map((feature, index) => (
              <GridItem key={index} p={5} borderRadius="lg" boxShadow="md" _hover={{ boxShadow: "lg" }} bg="gray.600">
                <Flex align="center" mb={3}>
                  <Icon as={feature.icon} boxSize={6} color="blue.400" mr={3} />
                  <Text fontSize="md" fontWeight="semibold" color="gray.200">{feature.name}</Text>
                </Flex>
                <Text fontSize="sm" color="gray.400">{feature.description}</Text>
              </GridItem>
            ))}
          </Grid>

          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6} mt={10}>
            {pricingPlans.map((plan, index) => (
              <Box key={index} position="relative">
                {plan.badge && (
                  <Badge bg="blue.600" color="white" px={3} py={1} position="absolute" top="-12px" left="10px">
                    {plan.badge}
                  </Badge>
                )}
                <Box p={6} border="2px solid" borderColor={plan.borderColor} borderRadius="lg" textAlign="left" bg="gray.700">
                  <Heading as="h3" size="sm" fontWeight="semibold" mb={2} color="gray.200">
                    {plan.name}
                  </Heading>
                  <List spacing={2} mb={6}>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} display="flex" alignItems="center">
                        <ListIcon as={FiCheckCircle} color="blue.500" boxSize={5} />
                        <Text fontSize="sm" color="gray.300">{feature}</Text>
                      </ListItem>
                    ))}
                  </List>
                  <Link to="/proxies/pricing" style={{ width: "100%" }}>
                  <Button w="full" bg="blue.600" color="white" _hover={{ bg: "blue.500" }} variant={plan.buttonVariant} size="sm">
                    {plan.price === "Custom" ? "Contact Us" : `Choose ${plan.name}`}
                  </Button>
                  </Link>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
};

export default PromoSERP;