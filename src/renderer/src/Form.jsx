import { useForm } from "react-hook-form";
import InputField from "./components/InputField";
import { calculateForces } from "./lib/utils";
import { useState } from "react";

function Form() {
  const [isCalculating, setIsCalculating] = useState(true);
  const [forces, setForces] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const res = calculateForces(data);
    setIsCalculating(false);
    setForces(() => res);
  }

  return (
    <>
      {isCalculating ? (
        <form
          className="h-[90%] w-[90%] max-w-xl overflow-auto rounded-md bg-orange-500 px-4 py-4 shadow-2xl scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-orange-500 scrollbar-corner-orange-500"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="my-3 text-lg font-bold text-orange-50">
              Please Enter All Values
            </h1>
            <InputField
              register={register}
              errors={errors}
              name={"Force0"}
              unit={"kN"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Angle0"}
              unit={"degree"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Radius1"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Length1"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Angle1"}
              unit={"degree"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Angle3"}
              unit={"degree"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Pressure4"}
              unit={"bar"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Diameter4"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Angle4"}
              unit={"degree"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Angle5"}
              unit={"degree"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Angle6"}
              unit={"degree"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Length2H"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Length3H"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Length5H"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Length2V"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Length3V"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Length5V"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"LengthP6P7"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Angle7"}
              unit={"degree"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Length6H"}
              unit={"mm"}
            />

            <InputField
              register={register}
              errors={errors}
              name={"Length6V"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"LengthP9P10"}
              unit={"mm"}
            />
            <InputField
              register={register}
              errors={errors}
              name={"Angle8"}
              unit={"degree"}
            />
            <div className="mt-4 flex w-full justify-evenly">
              <button
                className="rounded-md border-2 border-yellow-300 bg-orange-100 px-8 py-2 font-semibold text-yellow-600 transition-all hover:border-yellow-500 hover:bg-yellow-400 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
                onClick={reset}
                type="reset"
              >
                Reset
              </button>
              <button
                className="rounded-md border-2 border-yellow-300 bg-orange-100 px-8 py-2 font-semibold text-yellow-600 transition-all hover:border-yellow-500 hover:bg-yellow-400 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
                type="submit"
              >
                Calculate
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="container mx-auto max-w-xl overflow-auto rounded-md bg-orange-500 px-4 py-4 text-lg text-white shadow-2xl scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-orange-500 scrollbar-corner-orange-500">
          <table className="min-w-full divide-y divide-gray-200 text-center">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  S.No
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Force
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Vertical
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Horizontal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {forces.map((item, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {index}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {item.force.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {item.vertical.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {item.horizontal.toFixed(3)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-center">
            <button
              className="rounded-md border-2 border-yellow-300 bg-orange-100 px-8 py-2 font-semibold text-yellow-600 transition-all hover:border-yellow-500 hover:bg-yellow-400 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
              onClick={() => setIsCalculating(true)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
