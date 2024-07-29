function InputField({ errors, register, name, unit }) {
  return (
    <div className="flex w-4/5 flex-col items-center gap-2">
      <div className="flex w-full items-center justify-between gap-2">
        <label htmlFor={name} className="font-semibold text-orange-100">
          {name} (In {unit})
        </label>
        <input
          className="rounded-md bg-orange-50 px-2 py-1 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-1"
          {...register(name, {
            required: `${name} is required to calculate the force`,
          })}
          type="number"
          name={name}
          step={0.001}
          min={0}
          id={name}
        />
      </div>
      {errors[name] && (
        <p className="font-monospace mb-2 mt-1 text-left text-sm font-medium text-red-950">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default InputField;
