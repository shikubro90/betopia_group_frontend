"use client";
import { Button, TagsInput, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FiUploadCloud } from "react-icons/fi";

const FormValidation = () => {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            email: "",
            phone: "",
            education: "",
            skills: "",
            linkedIn: "",
            location: "",
            area: "",
            interest: "",
            message: "",
        },
        validate: {
            name: (value) =>
                value.length < 2 ? "Name must have at least 2 letters" : null,
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            phone: (value) =>
                value.length < 11 ? "Name must have at least 11 letters" : null,
            education: (value) =>
                value.length < 11 ? "Education Required*" : null,
            skills: (value) => (value.length < 11 ? "skills Required*" : null),
        },
    });

    return (
        <div>
            <form
                onSubmit={form.onSubmit((validate) => {
                    console.log(validate);
                })}
                className="text-white  font-light flex flex-col gap-2"
            >
                <TextInput
                    label="Name"
                    placeholder="Name"
                    key={form.key("name")}
                    {...form.getInputProps("name")}
                />
                <TextInput
                    label="Phone"
                    placeholder="Phone Number"
                    key={form.key("phone")}
                    {...form.getInputProps("phone")}
                />
                <TextInput
                    mt="md"
                    label="Email address"
                    placeholder="Your email address"
                    key={form.key("email")}
                    {...form.getInputProps("email")}
                />
                <TextInput
                    mt="md"
                    label="Education"
                    placeholder="Your education"
                    key={form.key("education")}
                    {...form.getInputProps("education")}
                />
                <TagsInput
                    mt="md"
                    label="Skills"
                    placeholder="Your Skills"
                    key={form.key("skills")}
                    // {...form.getInputProps("skills")}
                />
                <TextInput
                    mt="md"
                    label="LinkedIn"
                    placeholder="Profile Link"
                    key={form.key("linkedIn")}
                    {...form.getInputProps("linkedIn")}
                />
                <TextInput
                    mt="md"
                    label="Current Location"
                    placeholder="Your Current Location"
                    key={form.key("location")}
                    {...form.getInputProps("location")}
                />
                <TextInput
                    mt="md"
                    label="Area of Interest"
                    placeholder="Dropdown"
                    key={form.key("interest")}
                    {...form.getInputProps("interest")}
                />
                <div className="py-5">
                    <Textarea
                        label="Additional Notes (optional)"
                        placeholder="Write Your Message Here....."
                        autosize
                        minRows={50}
                        maxRows={4}
                    />
                </div>
                <div className="py-2">
                    {/* <FileInput /> */}
                    <Button
                        disabled
                        fullWidth
                        rightSection={<FiUploadCloud size={14} />}
                    >
                        Upload resume
                    </Button>
                </div>
                <div className="py-6 ">
                    <Button disabled fullWidth type="submit">
                        Apply Now
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormValidation;
