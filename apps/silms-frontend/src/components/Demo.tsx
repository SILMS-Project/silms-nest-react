import { Button } from 'flowbite-react';

const Demo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button pill>Default</Button>
      <Button color="blue" pill>
        Blue
      </Button>
      <Button color="gray" pill>
        Gray
      </Button>
      <Button color="dark" pill>
        Dark
      </Button>
      <Button color="light" pill>
        Light
      </Button>
      <Button color="success" pill>
        Success
      </Button>
      <Button color="failure" pill>
        Failure
      </Button>
      <Button color="warning" pill>
        Warning
      </Button>
      <Button color="purple" pill>
        Purple
      </Button>
    </div>
  );
}

export default Demo;
