import React, { useState, useEffect } from "react";
import Input from "./Input";

interface EditFavCharacterModalProps {
  editingCharacter: any;
  handleSave: (character: any) => void;
  setEditingCharacter: (character: any) => void;
}

export default function EditFavCharacterModal({
  editingCharacter,
  handleSave,
  setEditingCharacter,
}: EditFavCharacterModalProps) {
  // New state to manage form inputs
  const [formData, setFormData] = useState({
    gender: "",
    height: "",
  });

  const [error, setError] = useState({ gender: "", height: "" });

  // Effect to set form data when editingCharacter changes
  useEffect(() => {
    if (editingCharacter) {
      setFormData({
        gender: editingCharacter.gender,
        height: editingCharacter.height,
      });
    }
  }, [editingCharacter]);

  const onFinalEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.height) {
      setError({ ...error, height: "Height field cannot be empty." });
      return; // Prevent submission if height is empty
    }
    const updatedCharacter: any = {
      ...editingCharacter,
      ...formData, // Use formData for updated values
    };
    handleSave(updatedCharacter);
  };

  if (!editingCharacter) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center size-full">
      <div className="bg-white p-6 rounded-lg w-96 h-80">
        <h2 className="text-xl font-bold mb-4">Edit {editingCharacter.name}</h2>
        <form onSubmit={onFinalEdit}>
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Gender:</span>
              <select
                name="gender"
                value={formData.gender}
                onChange={(e) => {
                  setFormData({ ...formData, gender: e.target.value });
                }}
                className={`mt-1 w-full border outline-none rounded-lg border-gray-300 p-2`}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="n/a">N/A</option>
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700">Height:</span>
              <Input
                inputType="number"
                inputName="height"
                value={formData.height}
                className={`mt-1 w-full border rounded-lg outline-none ${
                  error.height ? "border-red-500" : "border-gray-300"
                } focus:border-gray-800 p-2`}
                onChange={(e) => {
                  if (error.height) {
                    setError({ ...error, height: "" });
                  }
                  setFormData({ ...formData, height: e.target.value });
                }}
              />
              <p className="mt-2 text-[#E11900] text-xs">{error.height}</p>
            </label>
          </div>

          <div className="mt-4 flex justify-between gap-5">
            <button
              type="submit"
              className="px-2 py-2 bg-green-500 text-white rounded w-1/2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setError({ ...error, height: "", gender: "" });
                setEditingCharacter(null);
              }}
              className="px-2 py-2 bg-white-500 text-green-500 rounded w-1/2 border-green-500 border-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
