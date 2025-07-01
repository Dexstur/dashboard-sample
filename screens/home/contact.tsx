import { AppButton } from "@/components";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

export function ContactWidget() {
  const [feedback, setFeedback] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  function handleClose(
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) {
    if (reason === "clickaway") {
      return;
    }
    setShowSuccess(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(feedback);
    setFeedback({
      email: "",
      name: "",
      message: "",
    });
  }

  const action = (
    <>
      <IconButton onClick={handleClose}>
        <MdClose />
      </IconButton>
    </>
  );

  return (
    <div className="bg-primary-shade w-full flex justify-center text-white py-6 lg:py-[120px]">
      <div className="hidden lg:block w-[12%]"></div>
      <div>
        <h2 className="text-lg font-semibold text-center py-4">CONTACT US</h2>
        <div className="flex flex-col gap-4 lg:flex-row items-center justify-center">
          <div className="text-wrap px-6">
            <p>Have any enquiries?</p>
            <p>Want to lodge a complaint?</p>
            <p>We would love to hear from you.</p>
            <p>Send us a message</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[280px] flex flex-col gap-4 lg:w-[400px] text-white"
          >
            <TextField
              name="email"
              label="Email"
              variant="filled"
              className="bg-primary rounded-md"
              color="app-dark"
              value={feedback.email}
              onChange={handleChange}
              type="email"
              required
            />
            <TextField
              name="name"
              label="Name"
              variant="filled"
              className="bg-primary rounded-md"
              color="app-dark"
              value={feedback.name}
              onChange={handleChange}
              type="text"
            />
            <TextField
              id="filled-multiline-flexible"
              name="message"
              label="Message"
              placeholder="Message..."
              minRows={4}
              multiline
              className="bg-primary rounded-md"
              variant="filled"
              color="app-dark"
              value={feedback.message}
              onChange={handleChange}
              required
            />
            <AppButton size="lg" color="alt" type="submit">
              Send
            </AppButton>
          </form>
        </div>
      </div>
      <div className="hidden lg:block w-[12%]"></div>
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Message sent"
        action={action}
      />
    </div>
  );
}
