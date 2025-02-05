const Stack = ({ stack }: { stack: string }) => {
  return (
    <div className=" bg-neutral-300 text-neutral-800 dark:bg-neutral-50 dark:text-neutral-600 font-semibold rounded-lg py-2 px-4 text-xs">
      {stack}
    </div>
  );
};
export default Stack;
