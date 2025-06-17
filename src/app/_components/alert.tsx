import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b dark:bg-slate-800", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The sky is the limit{" "}
              <a
                href={`https://www.google.com/search?sca_esv=8900ff206bef6d47&sxsrf=AE3TifNe_AzCptqokCF767aL00Zzrk3KXw:1750175820976&q=sky+picture&udm=2&fbs=AIIjpHx4nJjfGojPVHhEACUHPiMQl1qr30s_Yn7wPpme216nRqAiAs3n96dOzRdUbeFoQTVruQMSG0ODZc9KkcKN4QVcFh6X9qw7maIpZY-TBUr7y4OkN2hoyXAudP3uRYJpi8dFjx-Xc6RTBYGWACpOevcIxfXna6KLwhY4JubFkQ5rK23k80aw8MasK8PK84uhkDOI1Z8yQ4KthpAfdmlBj-RYOzK2hA&sa=X&sqi=2&ved=2ahUKEwjT-umA6fiNAxWrnokEHTgwCMgQtKgLegQIDxAB&biw=1309&bih=707&dpr=2.2`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                see the sky
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
