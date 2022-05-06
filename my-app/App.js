import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Input,
  FormControl,
  View,
  Collapse,
  Alert,
  CloseIcon,
  IconButton,
  Switch,
  Modal,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  Button,
  VStack,
  Box,
  Select,
  CheckIcon
} from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
const InputPass = () => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return <Box alignItems="center">
      <Input type={show ? "text" : "password"} w="75%" maxW="300px" py="0" InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>} placeholder="Password" />
    </Box>;
};
const ModalRandom = () => {
  const [showModal, setShowModal] = React.useState(false);
  return <Center>
      <HStack space={2} alignItems="center">
        <Text>On</Text>
        <Switch
          isChecked={showModal}
          onValueChange={() => setShowModal(!showModal)}
          aria-label={
            showModal === "true" ? "pokaz modal" : "wylacz modal"
          }
        />
        <Text>Off</Text>
      </HStack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Losowa liczba:</Modal.Header>
          <Modal.Body>
          {randomNumber(0, 1000)}
          <MyAlert />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false)
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false)
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>;
};
function MyAlert() {
  const [show, setShow] = React.useState(false);
  let that = this;
  let [timePassed, setTime] = React.useState(false)
  if(show == true){
    setTimeout(function(){setTime(setShow(false))}, 5000);
  }
  
  return <Box w="100%" alignItems="center">
      <Collapse isOpen={show}>
        <Alert w="90%" maxW="400" status="error">
          <VStack space={"sm"} flexShrink={1} w="100%" h="24">
            <HStack flexShrink={1} space={"2xl"} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={"xl"} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
              }}>
                  Witam!
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" color="coolGray.600" />} onPress={() => setShow(false)} />
            </HStack>
            <Box pl="2" _dark={{
            _text: {
              color: "coolGray.600"
            }
          }}>
              Maklowicz to dobry czlowiek
              {show ? 'Okno zaraz sie zamknie' : 'Zamkniete'}
            </Box>
          </VStack>
        </Alert>
      </Collapse>
      <Button size={"sm"} onPress={() => setShow(true)} mt={8} mx="auto">
        Alert czasowy 5sek
      </Button>
    </Box>;
}
const MojSelectGry = () => {
  let [service, setService] = React.useState("");
  return <Center>
      <Box w="3/4" maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Wybierz ulubioną grę" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="GTA 5" value="ux" />
          <Select.Item label="Counter-Strike" value="web" />
          <Select.Item label="Minecraft" value="cross" />
          <Select.Item label="TES:5 Skyrim" value="ui" />
          <Select.Item label="Gothic 1" value="backend" />
        </Select>
      </Box>
    </Center>;
};
const MojSelectFilmy = () => {
  let [service, setService] = React.useState("");
  return <Center>
      <Box w="3/4" maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Wybierz ulubioną grę" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Wilk z Wallstreet" value="ux" />
          <Select.Item label="Django" value="web" />
          <Select.Item label="Zjawa" value="cross" />
          <Select.Item label="Gatsby" value="ui" />
          <Select.Item label="Once upon a time in Hollywood" value="backend" />
        </Select>
      </Box>
    </Center>;
};
const lista = ['Gry','Filmy','Seriale']
let selected3='';

const MojSelectKat = () => {
  let [{selected2}, setService] = React.useState("");
  return <Center>
      <Box w="3/4" maxW="300">
        <Select selectedValue={selected2} minWidth="200" accessibilityLabel="Choose Service" placeholder="Wybierz kategorie" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label={lista[0]} value="ux" />
          <Select.Item label={lista[1]} value="web" />
          <Select.Item label={lista[2]} value="web" />
        </Select>
      </Box>
    </Center>;
};
const ShowSelected = () => {
  return <Center>
      <Box w="3/4" maxW="300">
        <Text>{selected3}</Text>
      </Box>
    </Center>;
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          
          <Heading size="lg">Kamil Pabin</Heading>
          
          <Link href="https://github.com/kamil-pabin" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Mój github 
            </Text>
          </Link>
          <MojSelectKat  />
          <MojSelectFilmy  />
          <ToggleDarkMode />
          <ModalRandom />
          <View>
            <Button onPress={showDatepicker} >Choose date</Button>
          </View>
          <View>
            <Button onPress={showTimepicker} >Choose time</Button>
          </View>
          <Text>Selected day and time: {date.toLocaleString()}</Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          <MyAlert />
          <InputPass />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}


