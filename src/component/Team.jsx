import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";

const Team = (index) => {
    return (
        <>
            <div className='flex flex-wrap justify-center'>
                <motion.div
                    className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4"
                    initial={{
                        opacity: 0,
                        // if odd index card, slide from right instead of left
                        x: index % 2 === 0 ? 50 : -50
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <Card className="w-96 m-4">
                        <CardHeader floated={false} className="h-80">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Natalie Paisley
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                CEO / Co-Founder
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <SlSocialFacebook />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <SlSocialTwitter />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <SlSocialInstagram />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </motion.div>
                <motion.div
                    className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4"
                    initial={{
                        opacity: 0,
                        // if odd index card, slide from right instead of left
                        y: index % 2 === 0 ? 50 : -50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <Card className="w-96 m-4">
                        <CardHeader floated={false} className="h-80">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Natalie Paisley
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                CEO / Co-Founder
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <SlSocialFacebook />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <SlSocialTwitter />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <SlSocialInstagram />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </motion.div>
                <motion.div
                    className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4"
                    initial={{
                        opacity: 0,
                        // if odd index card, slide from right instead of left
                        x: index % 2 === 0 ? -50 : 50
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <Card className="w-96 m-4">
                        <CardHeader floated={false} className="h-80">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Natalie Paisley
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                CEO / Co-Founder
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <SlSocialFacebook />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <SlSocialTwitter />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <SlSocialInstagram />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
            <div className='flex flex-wrap justify-center'>
                <motion.div
                    className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4"
                    initial={{
                        opacity: 0,
                        // if odd index card, slide from right instead of left
                        x: index % 2 === 0 ? 50 : -50
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <Card className="w-96 m-4">
                        <CardHeader floated={false} className="h-80">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Natalie Paisley
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                CEO / Co-Founder
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <SlSocialFacebook />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <SlSocialTwitter />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <SlSocialInstagram />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </motion.div>
                <motion.div
                    className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4"
                    initial={{
                        opacity: 0,
                        // if odd index card, slide from right instead of left
                        y: index % 2 === 0 ? -50 : 50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <Card className="w-96 m-4">
                        <CardHeader floated={false} className="h-80">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Natalie Paisley
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                CEO / Co-Founder
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <SlSocialFacebook />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <SlSocialTwitter />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <SlSocialInstagram />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </motion.div>
                <motion.div
                    className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4"
                    initial={{
                        opacity: 0,
                        // if odd index card, slide from right instead of left
                        x: index % 2 === 0 ? -50 : 50
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <Card className="w-96 m-4">
                        <CardHeader floated={false} className="h-80">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Natalie Paisley
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                CEO / Co-Founder
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <SlSocialFacebook />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <SlSocialTwitter />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <SlSocialInstagram />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </>
    )
}

export default Team