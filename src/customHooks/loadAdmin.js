import toast from "react-hot-toast";
import api from "../api";
import { logout, setAdmin, setLoading } from "../redux/adminSlice";

export const loadAdmin = async (dispatch) => {
  try {
    const toastId = toast.loading("loading...");
    dispatch(setLoading(true)); 

    const res = await api.get("/admin/adminDetail");
    toast.dismiss(toastId);
    dispatch(setAdmin(res.data.adminEmail));
  } catch (err) {
    dispatch(logout());
  } finally {
    dispatch(setLoading(false)); 
    toast.dismiss(toastId);
  }
};