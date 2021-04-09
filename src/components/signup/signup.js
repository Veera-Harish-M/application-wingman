import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./signup.css";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";


function Signup() {
	const history = useHistory();
	const [PositiveSnackBarOpen, setPositiveSnackBarOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [data, setData] = useState({
		Name: "",
		Mobile: "",
		Email: "",
		Password: "",
		Repassword: "",
	});
	const handlePositiveSnackbarClose = () => {
		setPositiveSnackBarOpen(false);
		setMessage("");
	  };
	

	
	const handler = (e) => {
		console.log("hjfghjfjhfh");
		if (data.Password === data.Repassword) {
			let path = `Startatfirst`;
			history.push(path);
		} else {
			setData({ ...data, Password: "", Repassword: "" });
		}
		setMessage("Email has been sent to rajanrahul@gmail.com. Follow the instruction to activate your account");
		setPositiveSnackBarOpen(true);
		console.log(data);
	};
	return (
		<div className="signup">
			<div class="box">
				<h3>
					NEW ACCOUNT?
				</h3>
				<div class="form__group field">
					<input
						type="text"
						class="form__field"
						placeholder="Name"
						name="user"
						id="user"
						value={data.Name}
						onChange={(e) =>
							setData({ ...data, Name: e.target.value })
						}
					/>
					</div>
				<div class="form__group field">
					<input
						type="email"
						class="form__field"
						placeholder="Email"
						name="email"
						id="email"
						value={data.Email}
						onChange={(e) =>
							setData({ ...data, Email: e.target.value })
						}
					/>
				</div>
				<div class="form__group field">
					<input
						type="password"
						class="form__field"
						placeholder="password"
						name="pass"
						id="pass"
						value={data.Password}
						onChange={(e) =>
							setData({ ...data, Password: e.target.value })
						}
					/>
				</div>
				<div class="form__group field">
					<input
						type="password"
						class="form__field"
						placeholder="Re-Enter Password"
						name="reenterpassword"
						id="reenterpassword"
						value={data.Repassword}
						onChange={(e) => {
							setData({ ...data, Repassword: e.target.value });
						}}
					/>
				</div>
				<div align="right">
					<Button
						variant="success"
						style={{ marginTop: "10%" }}
						onClick={handler}
					>
						Create Profile
					</Button>
				</div>
			</div>
			
			<Snackbar
        open={PositiveSnackBarOpen}
        autoHideDuration={6000}
        onClose={handlePositiveSnackbarClose}>
        <Alert severity='success'>{message}</Alert>
      </Snackbar>
		</div>
	);
}

export default Signup;
