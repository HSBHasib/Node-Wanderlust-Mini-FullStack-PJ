'use client'

import { Button, FieldError, Input, Label, ListBox, TextField, Select, TextArea } from '@heroui/react'
import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { DestinationFormHandaler } from '../../lib/BackendData';


const AdminPage = () => {
  return (
    <div className='min-h-screen h-full mt-20 container mx-auto'>
      <h2 className="text-5xl font-medium text-slate-900 mb-3 tracking-tight pl-9">
        Add New Travel Package
        </h2>
      
      {/* Form */}
      <div className='w-2xl mx-auto py-8'>
        <form
            onSubmit={DestinationFormHandaler}
            className="p-10 space-y-8 shadow-xl rounded-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="destinationName" isRequired>
                  <Label>Destination Name</Label>
                  <Input placeholder="Bali Paradise" className="rounded-lg bg-[#F8FAFC]" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired>
                <Label>Country</Label>
                <Input placeholder="Indonesia" className="rounded-lg bg-[#F8FAFC]" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>
                  <Select.Trigger className="rounded-lg bg-[#F8FAFC]">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach" textValue="Beach">
                        Beach
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mountain" textValue="Mountain">
                        Mountain
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="City" textValue="City">
                        City
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Adventure
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Cultural">
                        Cultural
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label>Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-lg bg-[#F8FAFC]"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-lg bg-[#F8FAFC]"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label>Departure Date</Label>
                  <Input type="date" className="rounded-lg bg-[#F8FAFC]" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-lg bg-[#F8FAFC]"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    rows={5}
                    placeholder="Describe the travel experience..."
                    className="rounded-sm bg-[#F8FAFC]"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex items-center justify-end gap-2'>
            <Button
              variant="outline"
              className=" rounded-sm border border-red-500 text-red-500"
            >
              <RiDeleteBinLine /> Cencel
            </Button>

            <Button
              type="submit"
              variant="outline"
              className=" rounded-sm bg-[#15A1BF] text-white"
            >
              Add Travel Package
            </Button>
              
            </div>
          </form>
      </div>
    </div>
  )
}

export default AdminPage
