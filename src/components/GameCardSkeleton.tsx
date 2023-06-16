import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton(){
    return (
        <Card width='250px' justifyContent='space-between' borderRadius={10} overflow='hidden'>
            <Skeleton height="200px">
                <CardBody>
                    <SkeletonText/>
                </CardBody>
            </Skeleton>
        </Card>
    )
}

export default GameCardSkeleton;