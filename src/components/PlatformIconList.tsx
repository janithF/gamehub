import { HStack, Icon } from "@chakra-ui/react";
import { GamePlatform } from "../hooks/useGames";
import { FaXbox, FaAndroid, FaApple, FaLinux } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { SiPlaystation3, SiPlaystation4, SiPlaystationvita, SiNintendoswitch, SiPlaystation5 } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: GamePlatform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaComputer,
    linux: FaLinux,
    web: BsGlobe,
    android: FaAndroid,
    ios: MdPhoneIphone,
    macos: FaApple,
    xbox: FaXbox,
    "xbox-series-x": FaXbox,
    xbox360: FaXbox,
    "xbox-one": FaXbox,
    "xbox-old": FaXbox,
    playstation3: SiPlaystation3,
    playstation4: SiPlaystation4,
    playstation5: SiPlaystation5,
    "ps-vita": SiPlaystationvita,
    "nintendo-switch": SiNintendoswitch,
  };

  return (
    <HStack marginY={2} wrap={"wrap"}>
      {platforms.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"} w={5} h={5}/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
