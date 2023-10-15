import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card width={'300px'} overflow="hidden" borderRadius={10}>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText mt='4' noOfLines={3} spacing='3' skeletonHeight='3' />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton