"use client";

import React from 'react'
import {AlertDialog, Button} from "@heroui/react";
import { deleteDestinationData } from '@/app/lib/BackendData';

const DeleteAlertDialog = ({destinationData}) => {
  const {_id, destinationName} = destinationData;
  return (
    <div>
       <AlertDialog>
      <Button className='text-danger-soft-foreground bg-white border rounded-sm border-red-500'>Delete Destination</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className='rounded-sm'>
                Cancel
              </Button>
              <Button onClick={(e) => deleteDestinationData(e, _id)} type='submit' slot="close" className='bg-danger-soft text-danger-soft-foreground rounded-sm'>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    </div>
  )
}

export default DeleteAlertDialog

