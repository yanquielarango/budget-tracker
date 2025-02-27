import { Text} from 'react-native'
import React, {useState} from 'react'
import { AlertDialog, AlertDialogBackdrop,
    AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from './ui/alert-dialog'
import { X} from 'lucide-react-native'
import { Button } from './ui/button'
import {useRouter} from "expo-router";
import {Icon} from "@/components/ui/icon";
import {Image} from "@/components/ui/image";
import {Pressable} from "@/components/ui/pressable";

const AlertEmailSend = ({setOpenAlertDialog, openAlertDialog} : any) => {
    const [error, setError] = useState("")
    const router = useRouter()

    const handleClose = () => {
        setOpenAlertDialog(false)
        router.back()
    }
    return (
        <AlertDialog isOpen={openAlertDialog} onClose={handleClose} >
            <AlertDialogBackdrop />
            <AlertDialogContent className="px-4 py-6">
                <AlertDialogHeader className="justify-center">
                    <Image source={require('@/assets/images/check.png')} className=" w-24 h-24  " alt="welcome" />
                    <AlertDialogCloseButton>
                        <Pressable  onPress={handleClose}  className="absolute left-20 bottom-6">
                        <Icon as={X}  className='w-7 h-7 ' />
                        </Pressable>
                    </AlertDialogCloseButton>
                </AlertDialogHeader>
                <AlertDialogBody>
                    {error ? (
                        <Text className="text-red-500 mb-4 font-Outfit text-lg">{error} </Text>
                    ) :  <Text className="text-green-500 mb-4 font-Outfit text-xl text-center"> Email sent successfully!</Text>
                    }

                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button variant='outline' className="mt-3"  onPress={handleClose}>
                       <Text>Close</Text>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default AlertEmailSend
