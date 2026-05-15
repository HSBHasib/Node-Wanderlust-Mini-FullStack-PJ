"use client";

import React from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  FieldError,
  ListBox,
  Select,
  TextArea,
} from "@heroui/react";
import { BiEditAlt } from "react-icons/bi";
import { updateDestinationData } from "@/lib/BackendData";
import { authClient } from "@/lib/auth-client";

const FormModal = ({ destinationData }) => {
  const handleEditToken = async () => {
    const getToken = await authClient.token();
    const token = getToken?.data?.token;
    return token;
  };

  const {
    _id,
    destinationName,
    country,
    price,
    duration,
    imageUrl,
    description,
    departureDate,
    category,
  } = destinationData;

  return (
    <Modal>
      <Button variant="ghost" className="hover:rounded-sm rounded-sm bg-white">
        <BiEditAlt /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-[#15A1BF]/30">
                <BiEditAlt size={20} />
              </Modal.Icon>
              <Modal.Heading>Update Your Info</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-2">
              <Surface variant="default">
                <form
                  onSubmit={(e) => updateDestinationData(e, _id, handleEditToken)}
                  className="space-y-8 py-3"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label>Destination Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-lg bg-[#F8FAFC]"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField defaultValue={country} name="country" isRequired>
                      <Label>Country</Label>
                      <Input
                        placeholder="Indonesia"
                        className="rounded-lg bg-[#F8FAFC]"
                      />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select
                        name="category"
                        isRequired
                        className="w-full"
                        placeholder="Select category"
                        defaultValue={category}
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
                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-lg bg-[#F8FAFC]"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                    >
                      <Label>Duration</Label>
                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-lg bg-[#F8FAFC]"
                      />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                      >
                        <Label>Departure Date</Label>
                        <Input
                          type="date"
                          className="rounded-lg bg-[#F8FAFC]"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
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
                  <Modal.Footer>
                    <Button
                      slot="close"
                      variant="outline"
                      className="rounded-lg"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="bg-[#15A1BF]/60 text-black rounded-lg"
                    >
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default FormModal;
