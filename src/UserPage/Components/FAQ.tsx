import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react';
const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by browsing our website, selecting the items you like, and adding them to your cart. Once you're ready to checkout, follow the prompts to provide your shipping and payment information. It's easy and convenient!",
    },
    {
      question: "Is home delivery available?",
      answer:
        "Yes, we offer home delivery to your location. During checkout, you can select your preferred shipping address, and we'll ensure your order is delivered right to your doorstep.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We want you to be satisfied with your purchase. If you're not happy with an item, you can return it within 30 days of delivery for a full refund or exchange. Please review our detailed return policy for more information.",
    },
    {
      question: "How can I check the availability of sizes?",
      answer:
        "You can check the availability of sizes for a specific item by visiting the product page. We provide size charts and guidance to help you select the right size. If you have further questions, feel free to contact our customer support.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your package as it makes its way to you.",
    },
    {
      question: "Is Cash on Delivery (COD) available?",
      answer:
        "Yes, we offer Cash on Delivery (COD) as a payment option for your convenience. You can choose COD during checkout and pay for your order when it's delivered to your doorstep.",
    },
    {
      question: "Can I cancel or modify my order after it's placed?",
      answer:
        "We understand that circumstances may change. If you need to cancel or modify your order, please contact our customer support as soon as possible. We'll do our best to accommodate your request if the order has not already been processed.",
},
];
const FAQ = () => {
  return (
        <Box m={10} w={["80%"]} margin={"auto"} fontFamily={"poppins"} color={"#0b3954"}>
            <Text fontSize={["32","48"]} fontWeight={"600"}  textAlign={"center"} m={"40px"} fontFamily={"poppins"} >
            Frequently Asked Questions</Text>
        <Box m={"50px auto"}>
        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight={600} p={3}>
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize="lg" p={3}>
                  {faq.answer}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        </Box>
      </Box>
  )
}

export default FAQ