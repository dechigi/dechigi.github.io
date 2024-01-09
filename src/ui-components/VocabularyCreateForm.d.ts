/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VocabularyCreateFormInputValues = {
    Name?: string;
    Description?: string;
};
export declare type VocabularyCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VocabularyCreateFormOverridesProps = {
    VocabularyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VocabularyCreateFormProps = React.PropsWithChildren<{
    overrides?: VocabularyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VocabularyCreateFormInputValues) => VocabularyCreateFormInputValues;
    onSuccess?: (fields: VocabularyCreateFormInputValues) => void;
    onError?: (fields: VocabularyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VocabularyCreateFormInputValues) => VocabularyCreateFormInputValues;
    onValidate?: VocabularyCreateFormValidationValues;
} & React.CSSProperties>;
export default function VocabularyCreateForm(props: VocabularyCreateFormProps): React.ReactElement;
