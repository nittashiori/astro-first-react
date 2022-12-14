import { action } from "@storybook/addon-actions";
import Button from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const $default: React.FC = () =>
  <Button
    label="button"
    onClick={action('clicked')}
  />;

export const Link: React.FC = () => 
  <Button
    as="a"
    href="/"
    label="link"
  />;

export const ExternalLink: React.FC = () => 
  <Button
    as="a"
    href="https://google.com"
    label="external link"
  />;

